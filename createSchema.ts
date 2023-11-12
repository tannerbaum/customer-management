import { Client } from "pg";

const client = new Client({
  user: "tannerhoisington",
  host: "localhost",
  database: "customermanagement",
  password: "postgres",
  port: 5432,
});
await client.connect();

try {
  const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);
  console.log(res.rows[0].message); // Hello world!
} catch (err) {
  console.error(err);
} finally {
  await client.end();
}
