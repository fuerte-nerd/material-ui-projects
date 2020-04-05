import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const NoteListing = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button></Button>
      </CardActions>
    </Card>
  );
};

export default NoteListing;
