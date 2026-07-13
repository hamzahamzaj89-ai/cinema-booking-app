interface VerifyParams {
  signUp: any;
  setActive: any;
  isLoaded: boolean;
  code: string;
}

export const verifyEmail = async ({
  signUp,
  setActive,
  isLoaded,
  code,
}: VerifyParams) => {
  if (!isLoaded) {
    throw new Error("Clerk is not loaded.");
  }

  const result = await signUp.attemptEmailAddressVerification({
    code,
  });

  if (result.status !== "complete") {
    throw new Error("Verification failed.");
  }

  await setActive({
    session: result.createdSessionId,
  });

  return result;
};