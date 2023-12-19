import { addProject } from "@hooks/tests/Project";

describe("Post a project", () => {
  it("with an image", () => {
    const name = "Mon projet";
    const description = "Ma description du projet";
    const imageUrl = "https://www.google.com";

    const result = addProject(name, description, imageUrl);

    expect(result.success).toBe(true);
  });

  it("without an image", () => {
    const name = "Mon projet sans image";
    const description = "Ma description du projet sans image";

    const result = addProject(name, description, "");

    expect(result.success).toBe(true);
  });

  it("should fail to post a project because the inputs arn't valids", () => {
    const name = "Mon @é&@é&ézé&";
    const description = "Ma description du projet";
    const imageUrl = "https://www.google.com";

    const result = addProject(name, description, imageUrl);

    expect(result.success).toBe(false);
    expect(result.message).toEqual("Les champs ne sont pas valides");
  });

  it("should fail to post a project because inputs are empty", () => {
    const name = "";
    const description = "";
    const imageUrl = "";

    const result = addProject(name, description, imageUrl);

    expect(result.success).toBe(false);
    expect(result.message).toEqual("Les champs ne sont pas valides");
  });

  it("should fail to post a project because the image input is not valid", () => {
    const name = "Mon projet";
    const description = "Ma description du projet";
    const imageUrl = "dbzhjidbzdjizdb";

    const result = addProject(name, description, imageUrl);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Les champs ne sont pas valides");
  });
});
