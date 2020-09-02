import uniqID from "uniqid";
const INITIAL_STATE = {
  boards: []
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOARD":
      return {
        ...state,
        boards: [
          ...state.boards,
          {
            id: uniqID(),
            name: action.payload
          }
        ]
      }
    default:
      return state
  }
}

export default themeReducer;