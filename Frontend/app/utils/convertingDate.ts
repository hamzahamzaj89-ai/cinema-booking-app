export const convertingDate = (date: Date) => {
  
  const formattedDate = new Date(date);

  const day = formattedDate?.getDate();
  const month = formattedDate?.toLocaleString("en-US", {
    month: "short",
  });
  const year = formattedDate.getFullYear();

  return `${day} ${month} ${year}`;
};


export const formattingDate = (date: Date) => {

   
  const formattedDate = new Date(date);

  const day = formattedDate?.getDate();


  const weekday = formattedDate.toLocaleDateString("en-US", {
    weekday: "short",
});

  const month = formattedDate?.toLocaleString("en-US", {
    month: "short",
  });
  const year = formattedDate?.getFullYear();

   return {
    day , month , weekday, 
   }
};








 export function convertMinutes(minutes: number) {
   
   const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}






export const formatTime = (dateString: Date) => {
    

    return new Date(dateString)?.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

};