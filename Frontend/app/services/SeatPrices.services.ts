export const SeatPrices = async (showTimeId:string)  => {

     try {

          const prices = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/showTime/prices/showTime/${showTimeId}`)

   const response = await prices.json();
  console.log(response)



          return response

        
     } catch (error:any) {
        
         throw new Error(error)
     }



}
