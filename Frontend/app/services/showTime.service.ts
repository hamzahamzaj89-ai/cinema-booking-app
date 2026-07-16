import axios from "axios";
import { errorMessage } from "../utils/ToastMessages";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const getShowTimes = async (
    branchId: string | null,
    movieId:string | null,
    
) => {

    try {

           
        if (!branchId || !movieId) {
                 return   errorMessage("Please enter the branchId or movieId")
        }


        const response = await fetch(
           `${BASE_URL}/showTime/get/branch/6a5649c5444044742ea4d2e2/movie/6a5261c1966612ec420282aa`
        );
  



        const res = await response.json()


             
        return res;

    } catch (error: any) {
            console.log(error)
        throw new Error(
            error?.response?.data?.message || "Failed to fetch showtimes"
        );

    }

};