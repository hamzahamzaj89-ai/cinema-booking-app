import { Session } from "@supabase/supabase-js";
import { errorMessage } from "../utils/ToastMessages";
import api from "../apis/axios";


 export const AddUserfavourites = async (session:Session , movieId:string)  => {


    if (!session) {
        errorMessage("Cannot proceed with session")
    }



       try {


         const response = await api.get(`/movie/favourite/movie/${movieId}` , {
        
                 headers: {Authorization: `Bearer ${session?.access_token}` },
        
         });


         return response.data;



        
       } catch (error:any) {

           throw new Error(
            error?.response?.data?.message || "Failed to add favourites"
        );

         
       }



}



