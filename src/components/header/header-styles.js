import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: 50,
    padding: "10px 0 10px 20px",
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: theme.palette.mainBg,
    color: theme.palette.mainFt
  },
}));