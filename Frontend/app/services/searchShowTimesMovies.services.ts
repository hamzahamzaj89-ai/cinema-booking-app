import api from "../apis/axios";
import { InfiniteResponse } from "../interface/InfiniteResponse";
import { IShowTime } from "../interface/IShowTime";

 export const searchShowTimeMovies = async (branchId:string | undefined , page :number , query:string)  => {

       console.log("hello")

           if (!branchId || query === "") {
                  return
           }



       try {


         const response = await api.get(`/showTime/search/${branchId}?query=${query}&page=${page}`);
         return response.data;



        
       } catch (error:any) {

           throw new Error(
            error?.response?.data?.message || "Failed to fetch ShowTimes"
        );

         
       }



}



