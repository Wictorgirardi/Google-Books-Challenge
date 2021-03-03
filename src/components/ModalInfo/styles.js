import { makeStyles } from "@material-ui/core/styles";

const ModalStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "right",
    },
  },
  image: {
    display: "flex",
    margin: "auto",
    marginBottom: "10px",
    marginTop: "10px",
  },
  span: {
    fontWeight: "300",
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  modal: {
    overflow: "scroll",
  },
}));

export { ModalStyles };
