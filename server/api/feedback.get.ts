import { query } from "~/utils/pgClient";
import { Feedback } from "../types";

export default defineEventHandler(async () => {
  try {
    const res = await query("SELECT * FROM feedback");
    return {
      // Nitro wraps types in a SerializeObject type that can't be stripped clientside. Pretty weird, but this is a workaround.
      // https://github.com/unjs/nitro/issues/1138
      toJSON() {
        return {
          feedback: res.rows as Array<Feedback>,
        };
      },
    };
  } catch (err) {
    console.error(err);
  }

  return {
    feedback: [],
  };
});
