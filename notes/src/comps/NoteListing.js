import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const NoteListing = (props) => {
  const { id, title, locked, create_date, modified_date, body } = props.data;
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button>Open</Button>
      </CardActions>
    </Card>
  );
};

export default NoteListing;
