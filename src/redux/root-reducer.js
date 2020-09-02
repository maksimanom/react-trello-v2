import { combineReducers } from "redux";

import themeReducer from "./theme/theme-reducer";

export default combineReducers({
  theme: themeReducer
})