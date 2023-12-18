// auth.ts
interface SignInResult {
  success: boolean;
  message?: string;
}

const isEmailValid = (email: string): boolean => {
  // Expression régulière pour vérifier le format d'un email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const signIn = (email: string, password: string): SignInResult => {
  if (!isEmailValid(email)) {
    return { success: false, message: "Invalid email format" };
  }
  if (email === "test@example.com" && password === "password123") {
    return { success: true };
  } else {
    return { success: false, message: "Email or password is incorrect" };
  }
};
