import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ModalInfo from "components/ModalInfo";
import { CardStyles } from "./Styles.js";
import { isNullishCoalesce } from "typescript";

const BookCard = (props) => {
  const classes = CardStyles(props);
  const data = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {data.image ? (
          <CardMedia
            className={classes.media}
            image={data.image}
            alt="image cover"
            title="image cover"
          />
        ) : <div className={classes.media}></div>}

        <CardContent>
          <div className={classes.title}>
            <h3>{data.title}</h3>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalInfo
          title={data.title}
          image={data.image}
          publisher={data.publisher}
          pageCount={data.pageCount}
          language={data.language}
          description={data.description}
          previewLink={data.previewLink}
        ></ModalInfo>
      </CardActions>
    </Card>
  );
};
export default BookCard;
