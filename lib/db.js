import mysql from 'mysql2/promise';

// Best practice: save the pool to globalThis to prevent multiple 
// connections during Next.js hot-reloading in development.
const globalForDb = global;

export const db = globalForDb.db || mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

if (process.env.NODE_ENV !== 'production') globalForDb.db = db;
