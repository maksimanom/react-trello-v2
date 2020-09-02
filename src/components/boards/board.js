import React from "react";

const Board = ({ board }) => {
  console.log("boards111", board);
  return (
    <div>
      <div>
        {board.name}
      </div>
      <div>
        {
          board.cards?.length ?
            (
              board.cards.map(card => (
                <div>
                  {card}
                </div>
              ))
            )
            :
            (
              "No card present"
            )
        }
      </div>
    </div>
  )
}

export default Board;