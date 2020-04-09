import React from "react";
import { connect } from "react-redux";
import { toggleViewer, loadNote, deleteNote } from "../redux/actions";
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

import moment from "moment";

const NoteListing = (props) => {
  const { id, title, create_date, modified_date, body } = props.data;

  const excerpt = () => {
    return body.length > 50 ? body.substr(0, 50) + "..." : body;
  };

  const handlePrimaryClick = () => {
    props.dispatch(loadNote(props.data.id));
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
            <Typography
              variant="caption"
              color="textSecondary"
              display="inline"
            >
              {`${moment(create_date).format("D MMMM")} ${
                new Date(create_date).getFullYear() === new Date().getFullYear()
                  ? ""
                  : create_date.getFullYear()
              } ${moment(create_date).format("HH:mm")}`}
            </Typography>
            {` `}
            <Typography
              variant="caption"
              color="textSecondary"
              display="inline"
            >
              {modified_date ? (
                <em>(Modified {moment(modified_date).fromNow()})</em>
              ) : null}
            </Typography>
            <Divider />
            <Box mt={2}>
              <Typography variant="body1">{excerpt()}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <Divider />
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
