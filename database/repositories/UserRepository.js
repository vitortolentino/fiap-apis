import client from "../config.js";

export default class UserRepository {
  static async getAllUsers() {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  }

  static async getUserById(id) {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createUser(name) {
    const result = await client.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
  }

  static async updateUser(id, name) {
    const result = await client.query('UPDATE users SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    return result.rows[0];
  }

  static async deleteUser(id) {
    await client.query('DELETE FROM users WHERE id = $1', [id]);
  }

};
