import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrihasluaxwszantbcul.supabase.co";
const supabaseAnonKey = "IkCbIiY95nIMK44";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// export const supabase = createClient("postgresql://postgres:IkCbIiY95nIMK44@db.nrihasluaxwszantbcul.supabase.co:5432/postgres");
