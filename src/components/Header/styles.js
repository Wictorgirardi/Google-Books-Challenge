import { makeStyles } from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: "100%",
    height: "350px",
    backgroundColor: "#1C73E8",
  },
  background: {
    textAlign: "center",
    margin: "5%",
  },
  text: {
    color: "white",
  },
}));

export { HeaderStyles };
