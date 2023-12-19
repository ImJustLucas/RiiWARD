import { Profile } from "@hooks/tests/Profile";

describe("Profile", () => {
  it("should return success when all URLs are valid", () => {
    const result = Profile(
      "John",
      "Doe",
      "Software Engineer",
      "avatar.jpg",
      "Technology",
      "Senior",
      "University",
      "https://www.linkedin.com/in/johndoe",
      "https://github.com/johndoe",
      "https://www.behance.net/johndoe",
      "https://www.dribble.com/johndoe",
    );

    expect(result.success).toBe(true);
  });

  it("should return success when no URLs are provided", () => {
    const result = Profile("John", "Doe", "Software Engineer");

    expect(result.success).toBe(true);
  });

  it("should return failure with an error message when LinkedIn URL is invalid", () => {
    const result = Profile(
      "John",
      "Doe",
      "Software Engineer",
      undefined,
      undefined,
      undefined,
      undefined,
      "invalid-linkedin-url",
    );

    expect(result.success).toBe(false);
    expect(result.message).toBe("LinkedIn URL is invalid");
  });

  it("should return failure with an error message when GitHub URL is invalid", () => {
    const result = Profile(
      "John",
      "Doe",
      "Software Engineer",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "invalid-github-url",
    );

    expect(result.success).toBe(false);
    expect(result.message).toBe("GitHub URL is invalid");
  });

  it("should return failure with an error message when Behance URL is invalid", () => {
    const result = Profile(
      "John",
      "Doe",
      "Software Engineer",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "invalid-behance-url",
    );

    expect(result.success).toBe(false);
    expect(result.message).toBe("Behance URL is invalid");
  });

  it("should return failure with an error message when Dribble URL is invalid", () => {
    const result = Profile(
      "John",
      "Doe",
      "Software Engineer",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "invalid-dribble-url",
    );

    expect(result.success).toBe(false);
    expect(result.message).toBe("Dribble URL is invalid");
  });
});
