import pg from "pg";

const pool = new pg.Pool({
  user: "tannerhoisington",
  host: "localhost",
  database: "customermanagement",
  password: "postgres",
  port: 5432,
});

export const query = (
  text: string,
  params?: any
  // callback?: (err: Error, result: pg.QueryResult<any>) => void
) => {
  return pool.query(text, params);
};

// const pgClient = new pg.Client({
//   user: "tannerhoisington",
//   host: "localhost",
//   database: "customermanagement",
//   password: "postgres",
//   port: 5432,
// });

// export default pgClient;
