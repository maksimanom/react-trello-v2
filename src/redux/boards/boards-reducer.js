import uniqID from "uniqid";
const INITIAL_STATE = [];

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOARD":
      return [
        ...state,
        {
          id: uniqID("board-"),
          name: action.payload
        }
      ]
    default:
      return state
  }
}

export default themeReducer;