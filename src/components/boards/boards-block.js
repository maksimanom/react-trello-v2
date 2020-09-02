import React from "react";
import styles from "./boards-block-styles";

import { connect } from "react-redux";
import { addBoard } from "../../redux/boards/boards-actions";
import { Button, TextField } from '@material-ui/core/';

import Board from "./board";

const INIT_STATE = {
  name: "",
  visible: false
}
const Boards = (props) => {
  const classes = styles();
  const { boards, addBoard } = props;
  const [addingBoardState, setAddingBoardState] = React.useState(INIT_STATE);

  const handleClick = () => {
    setAddingBoardState(prev => ({ ...prev, visible: !addingBoardState.visible }));
  }

  const handleChange = ({ currentTarget: { value } }) => {
    setAddingBoardState(prev => ({ ...prev, name: value }));
  }

  const handleSubmit = (e) => {
    addBoard(addingBoardState.name);
    setAddingBoardState(INIT_STATE);
  }

  return (
    <div className={classes.root}>
      {
        boards?.map(board => <Board key={board.id} board={board} />)
      }
      {
        addingBoardState.visible ?
          (
            <form>
              <TextField
                value={addingBoardState.name}
                onChange={handleChange}
              />
              <Button
                type="sumbit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          )
          :
          (
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              className="add-board-button"
            >
              Add board
            </Button>
          )
      }

    </div>
  )
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBoard: boardName => dispatch(addBoard(boardName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);