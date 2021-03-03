import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ModalStyles } from "./styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ModalInfo = (props) => {
  const classes = ModalStyles(props);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h2" component="h2" gutterBottom>
        {props.title}
      </Typography>
      <img src={props.image} className={classes.image}></img>

      <Typography variant="h5" component="h5" gutterBottom>
        Descrição: <span className={classes.span}> {props.description}</span>
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        Idioma: <span className={classes.span}> {props.language}</span>
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        Editora: <span className={classes.span}>{props.publisher} </span>
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        className={classes.text}
      >
        Preview:{" "}
        <a target="_blank" href={props.previewLink}>
          {props.previewLink}
        </a>
      </Typography>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Sair
          </Button>
        </div>
      </Grid>
    </div>
  );

  return (
    <>
      <Button size="small" color="primary" onClick={handleOpen}>
        Ver Mais
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default ModalInfo;
