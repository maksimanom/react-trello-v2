import React from 'react';
import styles from "./styles";

import { connect } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import materialTheme from "./theme";

import Header from "./components/header/header";
import Boards from "./components/boards/boards-block";

const App = (props) => {
  const classes = styles();
  const { theme: { darkMode } } = props;

  return (
    <ThemeProvider theme={materialTheme(darkMode)}>
      <div className={classes.root}>
        <Header />
        <Boards />
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
