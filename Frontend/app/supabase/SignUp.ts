import { supabase } from "../lib/supabase";
import * as Linking from "expo-linking";


interface Props {
    email: string;
    password: string;
    fullName: string

}


export async function signUp(
  { email,
  password,
  fullName}: Props
) {
  const redirectTo =
    Linking.createURL("auth/callback");

  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          full_name: fullName,
        },

        emailRedirectTo: redirectTo,
      },
    });

  if (error) {
    throw error;
  }

  return data;
}