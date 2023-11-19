import supabase from "~/utils/pgClient";
import { feedbackFormSchema } from "../zodSchemas";
import { tableName } from "~/utils/constants";

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

  const { error } = await supabase.from(tableName).insert({
    email: body.email,
    feedbacktext: body.feedback,
    name: body.name,
    sentiment: body.sentiment,
  });

  if (error) {
    throw createError({
      statusCode: parseInt(error.code),
      statusMessage: error.message,
    });
  }

  return "success";
});
