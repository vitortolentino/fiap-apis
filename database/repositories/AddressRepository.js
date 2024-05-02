import client from "../config.js";

export default class AddressRepository {
  static async getByUserId(id) {
    const result = await client.query('SELECT * FROM address WHERE user_id = $1', [id]);
    return result.rows;
  }

  static async create({ street, city,state, postal_code, user_id }) {
    console.log({ street, city,state, postal_code, user_id })
    const result = await client.query(`INSERT INTO address
      (street, city,state, postal_code, user_id)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *`,
      [street, city, state, postal_code, user_id]
  );

  return result.rows[0];
  }
};
