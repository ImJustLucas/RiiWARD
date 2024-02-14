type ButtonTheme = {
  background: string;

  text: string;
  outline: string;
};

export type Theme = {
  id: number;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    dark: string;
    grey: string;
    lightgrey: string;
    black: string;
    white: string;
    blue: string;

    background: {
      primary: string;
      secondary: string;
      contrast: string;
      dark: string;
      light: string;
    };

    text: {
      primary: string;
      secondary: string;
      contrast: string;
    };

    button: ButtonTheme;
  };
};
