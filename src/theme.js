import { createMuiTheme } from "@material-ui/core/styles";

const theme = (darkMode) => {
  return createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            height: "100%",
          },
          body: {
            height: "100%",
            "& #root": {
              height: "100%",
            },
          },
        },
      },
    },
    palette: {
      primary: {
        main: darkMode ? "#2e2e2e" : "#ebebeb",
        secondary: darkMode ? "#ebebeb" : "#2e2e2e"
      },
    },
  });

};

export default theme;