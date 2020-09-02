import React from "react";
import styles from "./boards-block-styles";

import { connect } from "react-redux";
import { addBoard } from "../../redux/boards/actions/boards-actions";
import { Button, TextField } from '@material-ui/core/';

import Board from "./board";

const Boards = (props) => {
  const classes = styles();
  const { boards, addBoard } = props;
  const [isAddingBoard, setIsAddingBoard] = React.useState(false);
  const [newBoardName, setNewBoardName] = React.useState("");

  const handleClick = () => {
    setIsAddingBoard(!isAddingBoard);
  }

  const handleChange = ({ currentTarget: { value } }) => {
    setNewBoardName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard(newBoardName);
    setIsAddingBoard(!isAddingBoard);
    setNewBoardName("");
  }

  return (
    <div className={classes.root}>
      {
        boards.length && boards.map(board => <Board board={board} />)
      }
      {
        isAddingBoard ?
          (
            <form>
              <TextField
                value={newBoardName}
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