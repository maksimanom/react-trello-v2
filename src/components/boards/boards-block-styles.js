import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: "calc( 100% - 50px )",
    marginTop: 5,
    padding: 20,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
    display: "flex",
    "& .add-board-button": {
      margin: "0 10px"
    }
  },
}));