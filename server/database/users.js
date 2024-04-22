import pool from "./index.js"

// User Related Queries
export async function getUsers() {
  const { rows } = await pool.query(`
    SELECT * FROM users
  `);
  return rows
}

export async function getUser(id) {
  const { rows } = await pool.query(`
    SELECT * 
    FROM users
    WHERE id = $1
  `, [id]);
  return rows[0]
}

export async function createUser(name, email) {
  const { rows } = await pool.query(`
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING id, name, email
  `, [name, email]);
  return rows[0]
}