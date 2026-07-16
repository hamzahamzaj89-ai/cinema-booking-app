// utils/clerkError.ts

export const getClerkErrorMessage = (error: any): string => {


  if (error?.errors?.length > 0) {

    return error.errors[0].message;

    
  }

  return "Something went wrong. Please try again.";



};