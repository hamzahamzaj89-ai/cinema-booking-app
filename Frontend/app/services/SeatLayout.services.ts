import api from "../apis/axios";
import { errorMessage } from "../utils/ToastMessages";

export const SeatLayout = async (showTimeId:string) => {
     console.log(showTimeId)

    try {

        if (!showTimeId) {
      return   errorMessage("Please enter the branchId or movieId")
               
        }

        const response = await api.get(`/showTime/seats/showTime/${showTimeId}`)
       



      return response.data


        
    } catch (error: any) {
         throw new Error(error?.response?.data?.message)
    }



} 