import { createClient } from "@supabase/supabase-js";


   export const configSupabase = () => {
    
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
     console.log("provide the credentials ")

     return
     
} 

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY  as string
);


return supabase
   }