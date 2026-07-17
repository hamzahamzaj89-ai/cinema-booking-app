export function SupabaseError(error:any) {
  if (!error) {
    return {
      title: "Error",
      message: "Something went wrong. Please try again.",
    };
  }

  // Prefer error.code when Supabase provides it
  switch (error.code) {
    case "email_not_confirmed":
      return {
        title: "Email Not Verified",
        message: "Please verify your email before signing in.",
      };

    case "invalid_credentials":
      return {
        title: "Login Failed",
        message: "Incorrect email or password.",
      };

    case "user_already_exists":
      return {
        title: "Account Exists",
        message: "An account with this email already exists.",
      };
  }

  // Fallback to message matching
  switch (error.message) {
    case "Invalid login credentials":
      return {
        title: "Login Failed",
        message: "Incorrect email or password.",
      };

    case "Email not confirmed":
      return {
        title: "Email Not Verified",
        message: "Please verify your email before signing in.",
      };

    case "User already registered":
      return {
        title: "Account Exists",
        message: "An account with this email already exists.",
      };

    case "Password should be at least 6 characters":
      return {
        title: "Weak Password",
        message: "Password must contain at least 6 characters.",
      };

    case "Unable to validate email address: invalid format":
      return {
        title: "Invalid Email",
        message: "Please enter a valid email address.",
      };

    case "Network request failed":
      return {
        title: "Network Error",
        message: "Please check your internet connection.",
      };

    default:
      return {
        title: "Error",
        message: error.message || "Something went wrong.",
      };
  }
}