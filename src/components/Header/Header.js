import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { HeaderStyles } from "./styles";

const Header = ({ searchBar }) => {
  const classes = HeaderStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <Grid item xs={12} className={classes.background}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className={classes.text}
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
