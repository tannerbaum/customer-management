import { query } from "~/utils/pgClient";
import { feedbackFormSchema } from "../zodSchemas";

export default defineEventHandler(async (event) => {
  let body;
  try {
    body = await readBody(event);
    feedbackFormSchema.parse(body);
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: "Form data is invalid",
    });
  }

  // Turns out it is a bad practice to use template strings for the query!
  const text =
    "INSERT INTO feedback(name, email, feedbacktext, sentiment) VALUES($1, $2, $3, $4)";
  const values = [body.name, body.email, body.feedback, body.sentiment];

  await query(text, values);

  return "success";
});
