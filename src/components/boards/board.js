import React from "react";
import styles from "./boards-styles";

const Board = ({ board }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className="board-header">
        {board.name}
      </div>
      <div className="board-cards">
        {
          board.cards?.length ?
            (
              board.cards.map(card => (
                <div className="card">
                  {card.name}
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