const express  = require('express');
const cors     = require('cors');
require('dotenv').config();

const { pool, initDB } = require('./db');

const app  = express();
const PORT = process.env.PORT || 3000;

//  Middleware 
app.use(cors({
  origin: 'https://myportfolio-client-pi.vercel.app',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

//  Routes 

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'My Portfolio server is running' });
});

// POST /api/contact   save form submission to PostgreSQL
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    await pool.query(
      `INSERT INTO contacts (name, email, subject, message)
       VALUES ($1, $2, $3, $4)`,
      [name.trim(), email.trim(), subject.trim(), message.trim()]
    );

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('DB error:', err.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

//  Start 
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialise database:', err.message);
  process.exit(1);
});
