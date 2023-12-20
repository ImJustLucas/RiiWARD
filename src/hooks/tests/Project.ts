interface ProjectResult {
  name: string;
  description: string;
  image?: string;
  success: boolean;
  message?: string;
}

interface Project {
  name: string;
  description: string;
  image?: string;
}

const isValidTextInput = (input: string) => {
  const textRegexp = /^[a-zA-Z0-9_ ]*$/;
  return textRegexp.test(input);
};

const isValidSrcImage = (src: string) => {
  const srcRegexp = /^((http|https|ftp):\/\/)/;
  return srcRegexp.test(src);
};

export const addProject = (
  name: string,
  description: string,
  image: string,
): ProjectResult => {
  if (
    name == undefined ||
    name == null ||
    name == "" ||
    description == undefined ||
    null ||
    description == ""
  ) {
    return {
      success: false,
      message: "Les champs ne sont pas valides",
      name: name,
      image: image,
      description: description,
    };
  }
  if (
    (isValidTextInput(name) &&
      isValidTextInput(description) &&
      image == null) ||
    image == undefined ||
    image == ""
  ) {
    return {
      success: true,
      message: "Projet créer",
      name: name,
      description: description,
    };
  }

  if (
    isValidTextInput(name) &&
    isValidTextInput(description) &&
    (image !== null || undefined) &&
    isValidSrcImage(image)
  ) {
    return {
      success: true,
      message: "Projet créer",
      name: name,
      description: description,
      image: image,
    };
  } else {
    return {
      success: false,
      message: "Les champs ne sont pas valides",
      name: name,
      description: description,
    };
  }
};

export const editProject = (
  existingProject: Project,
  name: string,
  description: string,
  image: string,
): ProjectResult => {
  if (existingProject == undefined || existingProject == null) {
    return {
      success: false,
      message: "Erreur dans la modification du projet, le projet n'existe pas",
      name: name,
      description: description,
    };
  }
  if (
    existingProject &&
    isValidTextInput(name) &&
    isValidTextInput(description) &&
    (image !== null || undefined) &&
    isValidSrcImage(image)
  ) {
    return {
      success: true,
      message: "Projet modifié",
      name: name,
      description: description,
      image: image,
    };
  } else {
    return {
      success: false,
      message:
        "Erreur dans la modification du projet, les champs ne sont pas valides",
      name: name,
      description: description,
    };
  }
};
