import api from "../apis/axios";
import { InfiniteResponse } from "../interface/InfiniteResponse";
import { IShowTime } from "../interface/IShowTime";

 export const getShowTimesMovies = async (branchId:string | undefined , page :number)  => {



           if (!branchId) {
                  return
           }

       try {


         const response = await api.get(`/showTime/get/branch/${branchId}?page=${page}`);
         return response.data as Promise<any>;



        
       } catch (error:any) {

           throw new Error(
            error?.response?.data?.message || "Failed to fetch ShowTimes"
        );

         
       }



}



