import React from "react";
import styles from "./boards-styles";

import { connect } from "react-redux";
import { addCard } from "../../redux/boards/boards-actions";

import { Button, TextField } from '@material-ui/core/';

const INIT_STATE = {
  name: "",
  visible: false
};
const Board = ({ board, addCard }) => {
  const classes = styles();
  const [addingCardState, setAddingCardState] = React.useState(INIT_STATE);

  const handleClick = () => {
    setAddingCardState(prev => ({ ...prev, visible: !addingCardState.visible }));
  }

  const handleChange = ({ currentTarget: { value } }) => {
    setAddingCardState(prev => ({ ...prev, name: value }));
  }

  const handleSubmit = () => {
    addCard(board.id, addingCardState.name);
    setAddingCardState(INIT_STATE);
  }

  return (
    <div className={classes.root}>
      <div className="board-header">{board.name}</div>
      <div className="board-cards">
        {
          board.cards.length ?
            (board.cards.map(card => (
              <div key={card.id} className="card">
                {card.name}
              </div>
            )))
            :
            ("No cards present")
        }
      </div>
      <div className="board-footer">
        {
          addingCardState.visible ?
            (<>
              <TextField
                value={addingCardState.name}
                onChange={handleChange}
                fullWidth
              />
              <Button
                type="sumbit"
                onClick={handleSubmit}
                disabled={!addingCardState.name.length}
              >
                Submit
              </Button>
            </>)
            :
            (<>
              <Button
                variant="contained"
                color="primary"
                name="add-card"
                onClick={handleClick}
              >
                Add card
              </Button>
              <Button
                variant="contained"
                color="primary"
                name="delete-board"
              >
                X
              </Button>
            </>)
        }

      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (boardId, name) => dispatch(addCard(boardId, name))
  }
}

export default connect(null, mapDispatchToProps)(Board);