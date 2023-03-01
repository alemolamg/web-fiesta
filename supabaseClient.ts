import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrihasluaxwszantbcul.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaWhhc2x1YXh3c3phbnRiY3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczNDY1OTAsImV4cCI6MTk5MjkyMjU5MH0.oV09PyI_PToc4COK7AvRcICMlGlfK3ThVQe3VzMEcL4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
