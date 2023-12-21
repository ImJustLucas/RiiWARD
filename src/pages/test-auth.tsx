import { AuthServices } from "@services/api";
import Link from "next/link";

const _AuthServices = new AuthServices();

export default function TestAuth() {
  const handleLogin = async () => {
    const user = await _AuthServices.signIn({
      email: "lucas.bellier@edu.devinci.fr",
      password: "password",
    });

    console.log("@POST: login", user);
  };

  const handleSignUp = async () => {
    const user = await _AuthServices.signUp({
      email: "lucas.bellier@edu.devinci.fr",
      password: "password",
    });

    console.log("@POST: siugnup", user);
  };

  const handleSignOut = async () => {
    const user = await _AuthServices.signOut();

    console.log("@POST: signout", user);
  };

  return (
    <div>
      <div>
        <h2>Auth API</h2>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <div>
        <Link href="/examples/protected-page">go to protected page</Link>
      </div>
    </div>
  );
}
