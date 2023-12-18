import { signIn } from "@hooks/Auth";

describe("Sign In", () => {
  it("should sign in successfully with valid email and password", () => {
    const email = "test@example.com";
    const password = "password123";

    const result = signIn(email, password);

    expect(result.success).toBe(true);
  });

  it("should fail to sign in with invalid email", () => {
    const email = "invalidemail";
    const password = "password123";

    const result = signIn(email, password);

    expect(result.success).toBe(false);
    expect(result.message).toEqual("Invalid email format");
  });

  it("should fail to sign in with incorrect password", () => {
    const email = "test@example.com";
    const password = "incorrectpassword";

    const result = signIn(email, password);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Email or password is incorrect");
  });
});
