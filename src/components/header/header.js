import React from "react";
import styles from "./header-styles";

import { connect } from "react-redux";
import { changeTheme } from "../../redux/theme/theme-actions";

const Header = ({ changeThemeMode }) => {
  const classes = styles();

  const handleClick = () => {
    changeThemeMode();
  }

  return (
    <header className={classes.root} onClick={handleClick}>
      Your trello board
    </header>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changeThemeMode: () => dispatch(changeTheme())
  }
}

export default connect(null, mapDispatchToProps)(Header);