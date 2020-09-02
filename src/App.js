import React from 'react';
import styles from "./styles";

import { connect } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import Header from "./components/header/header";

const App = (props) => {
  const classes = styles();
  const { theme: { darkMode } } = props;

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <div className={classes.root}>
        <Header />

      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme
  }
}


export default connect(mapStateToProps)(App);
