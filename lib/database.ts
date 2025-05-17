import { Pool } from 'pg';

// Initialize connection pool
let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false // Required for some Neon DB connections
      },
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection not established
    });
    
    // Log connection events for debugging
    pool.on('connect', () => {
      console.log('Connected to database');
    });
    
    pool.on('error', (err: Error) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }
  
  return pool;
}

// Helper function to execute queries
export async function query(text: string, params?: any[]) {
  const pool = getPool();
  
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error executing query', { text, error });
    throw error;
  }
}

// Close the pool (useful for testing and graceful shutdowns)
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}