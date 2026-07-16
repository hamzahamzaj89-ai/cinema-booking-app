import Toast from "react-native-toast-message";

export const errorMessage  = (
    
      text:string
   
)  => {



Toast.show({
  type: "error",
  text1: "Error",
  text2: text,
});


}




export const successMessage = (text:string) => {
 
    
Toast.show({
  type: "success",
  text1: "Success",
  text2: text,
});


}





export const infoMessage = (text:string) => {
 
    
Toast.show({
  type: "info",
  text1: "Info",
  text2: text,
});


}