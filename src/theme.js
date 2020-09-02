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
      mainBg: darkMode ? "#2e2e2e" : "#ebebeb",
      mainFt: darkMode ? "#ebebeb" : "#2e2e2e"
    },
  });

};

export default theme;