import { Model, pool } from './model.js'

// simple example
export default class User extends Model {
  static table = "users"
  table = "users"

  constructor({
    first,
    last,
    address,
  }, id) {

    // use this to shape the data being passed to the database
    super({
      data: {
        first: first?.slice(0, 254),
        last: last?.slice(0, 254),
        address1: address[0].slice(0, 254),
        address2: address[1].length > 0 ? address[1].slice(0, 254) : null,
      },
      id: id
    })
  }

  // custom query for User model
  static async selectName(first) {
    const { rows } = await pool.query(`
      SELECT *
      FROM users
      WHERE first = $1
      LIMIT 10
    `, [first]);
    console.log(rows[0])
    return rows
  }

  // // overloaded model method
  // static async selectAll() {
  //   const { rows } = await pool.query(`
  //     SELECT * 
  //     FROM users
  //     ORDER BY name
  //   `)
  //   console.log(rows[0])
  //   return rows
  // }
}

