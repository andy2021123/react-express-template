import pool from './pool.js'
import format from 'pg-format'

class Model {
  static table = "table"
  table = "table"

  constructor({ data, id }) {
    this.data = data
    this.id = id
  }

  async insert() {
    const { rows } = await pool.query(format(`
      INSERT INTO %I (%I)
      VALUES (%L)
      RETURNING id
    `, this.table, Object.keys(this.data), Object.values(this.data)));
    this.id = rows[0]
    return this.id
  }

  async update() {
    const { rows } = await pool.query(format(`
      UPDATE %I
      SET (%I) = (%L)
      WHERE id = %L
    `, this.table, Object.keys(this.data), Object.values(this.data), this.id));
  }

  async delete() {
    const { rows } = await pool.query(format(`
      DELETE FROM %I WHERE id = %L
    `, this.table, this.id));
  }

  static async delete(id) {
    const { rows } = await pool.query(format(`
      DELETE FROM %I WHERE id = %L
    `, this.table, id));
  }

  static async selectAll() {
    const { rows } = await pool.query(format(`
      SELECT * 
      FROM %I
    `, this.table));
    return rows
  }

  static async select(id) {
    const { rows } = await pool.query(format(`
      SELECT * 
      FROM %I
      WHERE id = %L
    `, this.table, id));
    return rows[0]
  }
}

export { Model, pool }