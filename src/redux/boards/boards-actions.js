export const addBoard = (name) => {
  return {
    type: "ADD_BOARD",
    payload: name
  }
}

export const addCard = (boardId, name) => {
  return {
    type: "ADD_CARD",
    payload: {
      boardId: boardId,
      name: name
    }
  }
}