import { createMuiTheme } from "@material-ui/core/styles";

const theme = (type) => {
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
      mainBg: "#3F51B5",
      mainFt: "#ffffff"
    },
  });

};

export default theme;