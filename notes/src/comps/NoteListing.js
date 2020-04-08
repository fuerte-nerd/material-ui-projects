import React from "react";
import { connect } from "react-redux";
import { toggleViewer, loadNote, deleteNote } from "../redux/actions";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

import moment from "moment";

const NoteListing = (props) => {
  const { id, title, locked, create_date, modified_date, body } = props.data;

  const excerpt = () => {
    return body.length > 50 ? body.substr(0, 50) + "..." : body;
  };

  const handlePrimaryClick = () => {
    props.dispatch(loadNote(id));
    props.dispatch(toggleViewer());
  };

  const handleDeleteClick = () => {
    props.dispatch(deleteNote(id));
  };

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardActionArea onClick={handlePrimaryClick}>
          <CardContent>
            <Typography variant="h4" variantMapping={{ h4: "h2" }}>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {`${moment(create_date).format("D MMMM")} ${
                new Date(create_date).getFullYear() === new Date().getFullYear()
                  ? ""
                  : create_date.getFullYear()
              }`}
            </Typography>
            <Typography variant="body1">{excerpt()}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary" onClick={handlePrimaryClick}>
            View / Edit
          </Button>
          <Button color="secondary" onClick={handleDeleteClick}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default connect()(NoteListing);
