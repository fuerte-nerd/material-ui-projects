import React, { useEffect, useState } from "react";
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
  const { id, title, create_date, modified_date, body } = props.data;
  const [currentNoteState, setCurrentNoteState] = useState(props.data);

  const excerpt = () => {
    return currentNoteState.body.length > 50
      ? currentNoteState.body.substr(0, 50) + "..."
      : currentNoteState.body;
  };

  const handlePrimaryClick = () => {
    props.dispatch(loadNote(props.data.id));
    props.dispatch(toggleViewer());
  };

  const handleDeleteClick = () => {
    props.dispatch(deleteNote(id));
  };

  useEffect(() => {
    setCurrentNoteState(
      props.notes.filter((i) => {
        return i.id === props.data.id ? i : null;
      })[0]
    );
  }, [props.notes]);

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardActionArea onClick={handlePrimaryClick}>
          <CardContent>
            <Typography variant="h4" variantMapping={{ h4: "h2" }}>
              {currentNoteState.title}
            </Typography>
            {` `}
            <Typography
              variant="caption"
              color="textSecondary"
              display="inline"
            >
              {`${moment(currentNoteState.create_date).format("D MMMM")} ${
                new Date(currentNoteState.create_date).getFullYear() ===
                new Date().getFullYear()
                  ? ""
                  : currentNoteState.create_date.getFullYear()
              } ${moment(currentNoteState.create_date).format("HH:mm")}`}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              display="inline"
            >
              {currentNoteState.modified_date ? (
                <em>
                  (Modified {moment(currentNoteState.modified_date).fromNow()})
                </em>
              ) : null}
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

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NoteListing);
