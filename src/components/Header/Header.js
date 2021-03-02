import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = ({ searchBar }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ width: "100%", height: "350px", backgroundColor: "#1C73E8" }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            style={{ color: "white" }}
          >
            Pesquisa Google Books
          </Typography>
          {searchBar}
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
