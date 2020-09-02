import React from 'react';
import styles from "./styles";

import { connect } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import Header from "./components/header/header";

const App = (props) => {
  const classes = styles();
  console.log("aaaaa", props);
  return (
    <ThemeProvider theme={theme(props.darkMode)}>
      <div className={classes.root}>
        <Header />

      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  }
}

export default connect(mapStateToProps)(App);
