// db.js
const { Pool } = require('pg');

// Create a new connection pool using the DATABASE_URL from environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Needed for Neon SSL connections
  }
});

module.exports = pool;
