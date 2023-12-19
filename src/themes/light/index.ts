import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";
// import { create } from "domain";

const light: Theme = {
  id: 0,
  name: "light",
  colors: {
    primary: "#00b4d8",
    secondary: "#90e0ef",

    background: {
      primary: createColor(245, 246, 247, 100),
      secondary: createColor(246, 6, 123, 0.2),
      contrast: "",
      dark: createColor(33, 37, 41, 100),
      light: createColor(255, 255, 255, 100),
    },
    text: {
      primary: "#2b2d42",
      secondary: createColor(141, 149, 157),
      contrast: "#2b2d42",
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default light;
