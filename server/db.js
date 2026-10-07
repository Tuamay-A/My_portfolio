const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
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
  console.log('✅ Database ready — contacts table exists');
};

module.exports = { pool, initDB };
