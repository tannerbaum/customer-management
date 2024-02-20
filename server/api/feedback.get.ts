import supabase from "~/utils/pgClient";
import { tableName } from "~/utils/constants";

export default defineEventHandler(async () => {
  const { data, error } = await supabase.from(tableName).select();

  if (error) {
    console.log(error);
    return {
      feedback: [],
    };
  }

  return {
    // Nitro wraps types in a SerializeObject type that can't be stripped clientside. Pretty weird, but this is a workaround.
    // https://github.com/unjs/nitro/issues/1138
    toJSON() {
      return {
        // feedback: data as Array<Feedback>,
        feedback: data,
      };
    },
  };
});
