import { signUp } from "@hooks/Auth";

describe("signUp", () => {
  it("should return a success result when all conditions are met", () => {
    const email = "test@example.com";
    const password = "password";
    const confirmPassword = "password";
    const acceptTerms = true;

    const result = signUp(email, password, confirmPassword, acceptTerms);

    expect(result.success).toBe(true);
  });

  it("should return a failure result when terms and conditions are not accepted", () => {
    const email = "test@example.com";
    const password = "password";
    const confirmPassword = "password";
    const acceptTerms = false;

    const result = signUp(email, password, confirmPassword, acceptTerms);

    expect(result.success).toBe(false);
    expect(result.message).toBe("You must accept the terms and conditions");
  });

  it("should return a failure result when passwords do not match", () => {
    const email = "test@example.com";
    const password = "password";
    const confirmPassword = "differentPassword";
    const acceptTerms = true;

    const result = signUp(email, password, confirmPassword, acceptTerms);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Passwords do not match");
  });

  it("should return a failure result when email is invalid", () => {
    const email = "invalidEmail";
    const password = "password";
    const confirmPassword = "password";
    const acceptTerms = true;

    const result = signUp(email, password, confirmPassword, acceptTerms);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Email is invalid");
  });
});
