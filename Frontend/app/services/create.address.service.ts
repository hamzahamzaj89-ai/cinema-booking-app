import { Session } from "@supabase/supabase-js";
import api from "../apis/axios";
import { IAddressFormData } from "../interface/IAddress";
import useAuthStore from "../store/authStore";
import { errorMessage } from "../utils/ToastMessages";

export const createUserAddress = async (formData:IAddressFormData , session:Session) => {


  
    try {

        if (!formData.address || !formData.fullName || !formData.phone) {
                    
            return errorMessage("Please enter the required fields")
        }


        console.log(formData)



        if (!session) {
           return errorMessage("Unauthorized access Plaesea try again")
        }


        const response = await api.post( "/address/create", formData,
  {
    headers: {
      Authorization: `Bearer ${session?.access_token}`
      
    },
  }
);
     return response.data
        
    } catch (error:any) {



        
        throw new Error(
            error?.response?.data?.message || "Failed to fetch branches"
        );
          
    }


}