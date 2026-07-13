interface SignUpParams {
  signUp: any;
  isLoaded: boolean;
  name: string;
  email: string;
  password: string;
}

export const signUpUser = async ({
  signUp,
  isLoaded,
  name,
  email,
  password,
}: SignUpParams) => {


    
  if (!isLoaded) {
    throw new Error("Clerk is not loaded.");
  }

  await signUp.create({
    firstName: name,
    emailAddress: email,
    password,
  });

  await signUp.prepareEmailAddressVerification({
    strategy: "email_code",
  });
};