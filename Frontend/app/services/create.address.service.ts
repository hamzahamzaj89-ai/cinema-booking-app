import api from "../apis/axios";
import { IAddressFormData } from "../interface/IAddress";
import useAuthStore from "../store/authStore";

export const createUserAddress = async (formData:IAddressFormData) => {


    const session = useAuthStore((state) => state.session)

    try {


        const response = await api.post(
  "/user/update-profile",
  formData,
  {
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
      "Content-Type": "multipart/form-data",
    },
  }
);
        
    } catch (error:any) {



        
        throw new Error(
            error?.response?.data?.message || "Failed to fetch branches"
        );
          
    }


}