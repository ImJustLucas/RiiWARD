import { editProject } from "@hooks/tests/Project";

describe("Edit a project", () => {
  it("should successfully edit a project and change the image", () => {
    const existingProject = {
      name: "Projet initial",
      description: "Description initiale",
      image: "https://example.com/image.jpg",
    };

    // Modifiez le nom et la description et l'image
    const updatedName = "Nouveau nom";
    const updatedDescription = "Nouvelle description";
    const updatedImage = "https://example.com/image2.jpg";
    const result = editProject(
      existingProject,
      updatedName,
      updatedDescription,
      updatedImage,
    );

    expect(result.success).toBe(true);
    expect(result.message).toEqual("Projet modifié");
    expect(result.name).toEqual(updatedName);
    expect(result.description).toEqual(updatedDescription);
    expect(result.image).toEqual(updatedImage); // L'image devrait changer
  });
  it("should fail to edit a project because initial project is not defined", () => {
    const existingProject = null;

    // Modifiez le nom et la description et l'image
    const updatedName = "Nouveau nom";
    const updatedDescription = "Nouvelle description";
    const updatedImage = "https://example.com/image2.jpg";
    const result = editProject(
      existingProject,
      updatedName,
      updatedDescription,
      updatedImage,
    );

    expect(result.success).toBe(false);
    expect(result.message).toEqual(
      "Erreur dans la modification du projet, le projet n'existe pas",
    );
  });
  it("should fail to edit a project because the inputs are not valid", () => {
    const existingProject = {
      name: "Projet initial",
      description: "Description initiale",
      image: "https://example.com/image.jpg",
    };

    // Modifiez le nom et la description sans changer l'image
    const updatedName = "@ééé21893819038$ù=)à";
    const updatedDescription = "378397289372930829@@@@@@";
    const updatedImage = "testtetst";
    const result = editProject(
      existingProject,
      updatedName,
      updatedDescription,
      updatedImage,
    );

    expect(result.success).toBe(false);
    expect(result.message).toEqual(
      "Erreur dans la modification du projet, les champs ne sont pas valides",
    );
  });
});
