import { signIn } from "@hooks/Auth";

describe("Sign In", () => {
  it("should sign in successfully with valid email and password", () => {
    const email = "test@example.com";
    const password = "password123";

    const result = signIn(email, password);

    expect(result).toBe(true);
  });

  it("should fail to sign in with invalid email", () => {
    const email = "invalidemail";
    const password = "password123";

    const result = signIn(email, password);

    expect(result).toBe(false);
  });

  it("should fail to sign in with incorrect password", () => {
    const email = "test@example.com";
    const password = "incorrectpassword";

    const result = signIn(email, password);

    expect(result).toBe(false);
  });
});
