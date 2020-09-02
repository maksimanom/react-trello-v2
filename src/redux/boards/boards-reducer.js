import uniqID from "uniqid";
import { addCard } from "./boards-utils";
import { act } from "react-dom/test-utils";

const INITIAL_STATE = [];
const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOARD":
      return [
        ...state,
        {
          id: uniqID("board-"),
          name: action.payload,
          cards: []
        }
      ]
    case "ADD_CARD":
      const newState = addCard(state, action.payload);
      return newState
    default:
      return state
  }
}

export default themeReducer;