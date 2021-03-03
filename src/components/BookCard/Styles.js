import { makeStyles } from "@material-ui/core/styles";

const CardStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 300,
      margin: "5px",
      marginTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 300,
      margin: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      width: 200,
      height: 300,
      margin: "20px",
    },
  },
  media: {
    height: 140,
  },
  title: {
    height: "70px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export { CardStyles };
