import pkg from 'pg'

const { Pool } = pkg

const pool = new Pool({
  host: process.env.PG_HOST || 'localhost',
  user: process.env.PG_USER || 'postgres',
  port: process.env.PG_PORT || 5432,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export default pool