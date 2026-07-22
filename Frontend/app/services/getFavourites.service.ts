import { Session } from "@supabase/supabase-js";
import { errorMessage } from "../utils/ToastMessages";
import api from "../apis/axios";


 export const getUserFavorites = async (session:Session)  => {

      console.log("hello")

    if (!session) {
        errorMessage("Cannot proceed with session")
    }

         


       try {


         const response = await api.get(`/movie/favourites` , {
        
                 headers: {Authorization: `Bearer ${session?.access_token}` },
        
         });


         return response.data;



        
       } catch (error:any) {

           throw new Error(
            error?.response?.data?.message || "Failed to fetch favourites"
        );

         
       }



}

