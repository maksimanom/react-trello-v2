export const addBoard = (boardName) => {
  return {
    type: "ADD_BOARD",
    payload: boardName
  }
}