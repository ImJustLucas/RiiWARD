// auth.ts
interface SignInResult {
  success: boolean;
  message?: string;
}

export const signIn = (email: string, password: string): SignInResult => {
  // logique d'authentification ici

  // Exemple
  if (email === "test@example.com" && password === "password123") {
    return { success: true };
  } else {
    return { success: false, message: "Email or password is incorrect" };
  }
};
