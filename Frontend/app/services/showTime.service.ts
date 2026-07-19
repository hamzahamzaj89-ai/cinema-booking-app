import api from "../apis/axios";
import { errorMessage } from "../utils/ToastMessages";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const getShowTimes = async (
    branchId: string | undefined,
    movieId:string | undefined,
    
) => {

    try {

           
        if (!branchId || !movieId) {
                 return   errorMessage("Please enter the branchId or movieId")
        }
          
        console.log(branchId , movieId)


         const response = await api.get(`/showTime/get/branch/${branchId}/movie/${movieId}`)
          
        return response.data;

    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || "Failed to fetch showtimes"
        );

    }

};