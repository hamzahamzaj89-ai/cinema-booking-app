import { errorMessage } from "../utils/ToastMessages";

export const SeatLayout = async (showTimeId:string) => {
     console.log(showTimeId)

    try {

        if (!showTimeId) {
      return   errorMessage("Please enter the branchId or movieId")
               
        }
       

      const seatLayout = await fetch(`http://192.168.100.20:5000/api/showTime/seats/showTime/6a5658bf444044742ea4d305`)
          console.log(seatLayout)
      const res = await seatLayout.json();


      return res


        
    } catch (error: any) {
        console.log(error)
         throw new Error(error)
    }



} 