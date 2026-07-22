import { supabase } from "../lib/supabase";
import * as Linking from "expo-linking";


interface Props {
    email: string;
    password: string;
    name: string

}


export async function signUp(
  { email,
  password,
  name}: Props
) {
  const redirectTo =
    Linking.createURL("/callback");
    

  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          name: name,
        },

   
      },
    });






  if (error) {

     console.log(error)
    throw error;
  }
   

  console.log(data)
  return data;
}