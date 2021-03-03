import { makeStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#f7f7f7",
  },
  searchBar: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "inline-flex",
      marginTop: "10px",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
      display: "inline-flex",
      marginTop: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      display: "inline-flex",
      marginTop: "10px",
    },
  },
  pagination: {
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "20px",
    },
    padding: "20px",
  },
}));

export { HomeStyles };
