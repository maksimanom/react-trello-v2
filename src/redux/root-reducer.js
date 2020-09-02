import { combineReducers } from "redux";

import themeReducer from "./theme/theme-reducer";
import boardsReducer from "./boards/boards-reducer";

export default combineReducers({
  theme: themeReducer,
  boards: boardsReducer
})