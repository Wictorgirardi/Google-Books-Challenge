import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 300,
    margin: "20px",
  },
  media: {
    height: 140,
  },
});

const BookCard = (props) => {
  const classes = useStyles();
  const data = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div
            style={{
              height: "70px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {" "}
            <h3>{data.title}</h3>{" "}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Mais
        </Button>
      </CardActions>
    </Card>
  );
};
export default BookCard;
