import api from "../apis/axios";

 export const getShowTimesMovies = async (branchId:string | undefined) => {

           if (!branchId) {
                  return
           }

       try {


         const response = await api.get(`/showTime/get/branch/${branchId}?page=0`);
         return response.data;



        
       } catch (error:any) {

           throw new Error(
            error?.response?.data?.message || "Failed to fetch ShowTimes"
        );

         
       }



}



