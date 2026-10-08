const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Create the contacts table if it doesn't exist yet
const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id         SERIAL PRIMARY KEY,
      name       VARCHAR(100)  NOT NULL,
      email      VARCHAR(150)  NOT NULL,
      subject    VARCHAR(255)  NOT NULL,
      message    TEXT          NOT NULL,
      created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
    );
  `);
  console.log('✅ Database ready contacts table exists');
};
  
module.exports = { pool, initDB };
