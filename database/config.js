import pg from 'pg';
const { Client } = pg;

const config = {
  database: "postgres",
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
};

const connection = new Client(config);

export default connection;
