import { Session } from "@supabase/supabase-js";
import api from "../apis/axios";
import { InfiniteResponse } from "../interface/InfiniteResponse";
import { IShowTime } from "../interface/IShowTime";
import useAuthStore from "../store/authStore";
import { errorMessage } from "../utils/ToastMessages";

 export const getUserAddresses = async (session:Session)  => {

      console.log("hello")

    if (!session) {
        errorMessage("Cannot proceed with session")
    }

         


       try {


         const response = await api.get(`/address/get` , {
        
                 headers: {Authorization: `Bearer ${session?.access_token}` },
        
         });


         return response.data;



        
       } catch (error:any) {

           throw new Error(
            error?.response?.data?.message || "Failed to fetch ShowTimes"
        );

         
       }



}



