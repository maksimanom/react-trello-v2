import uniqID from "uniqid";

export const addCard = (boards, { boardId, name }) => {
  const newBoards = [...boards];
  const board = newBoards.find(board => board.id === boardId);
  board.cards.push({
    id: uniqID("card-"),
    name: name,
    description: "",
  })
  return newBoards;
}