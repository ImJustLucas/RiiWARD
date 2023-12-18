// auth.ts
interface SignInResult {
  success: boolean;
  message?: string;
}
interface SignUpResult {
  success: boolean;
  message?: string;
}

export const signIn = (email: string, password: string): SignInResult => {
  if (!isValidEmail(email)) {
    return { success: false, message: "Invalid email format" };
  }
  if (email === "test@example.com" && password === "password123") {
    return { success: true };
  } else {
    return { success: false, message: "Email or password is incorrect" };
  }
};

export const signUp = (
  email: string,
  password: string,
  confirmPassword: string,
  acceptTerms: boolean,
): SignUpResult => {
  if (!acceptTerms)
    return {
      success: false,
      message: "You must accept the terms and conditions",
    };
  if (password !== confirmPassword)
    return { success: false, message: "Passwords do not match" };
  if (!isValidEmail(email))
    return { success: false, message: "Email is invalid" };

  // Add the implementation for the signUp function here

  return { success: true }; // Return a default success result for now
};

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
