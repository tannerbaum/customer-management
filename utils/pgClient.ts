import pg from "pg";

// TODO: replace these not so secret secrets with envs
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
