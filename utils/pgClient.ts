import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/types/supabase";

// better would be one of those env libraries to ensure they are set
const supabase = createClient<Database>(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);

export default supabase;
