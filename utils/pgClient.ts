import pg from "pg";

const pool = new pg.Pool({
  user: "tannerhoisington",
  host: "localhost",
  database: "customermanagement",
  password: "postgres",
  port: 5432,
});

export const query = (text: string, params?: any) => {
  return pool.query(text, params);
};
