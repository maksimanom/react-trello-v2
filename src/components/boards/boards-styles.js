import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: 250,
    marginTop: 5,
    padding: 5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
    "& .board-header": {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      borderBottom: `1px solid ${theme.palette.primary.secondary}`,
      paddingBottom: 10
    },
    "& .board-cards": {
      padding: "10px 0"
    },
    "& .board-footer": {
      display: "flex",
      justifyContent: "space-between",
      "& .MuiButton-root":{
        fontSize: 12,
        padding: 5,
      },
    }
  },
}));