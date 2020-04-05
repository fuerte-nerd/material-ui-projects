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
    <Card style={{ marginBottom: "1rem" }}>
      <CardContent>
        <Typography variant="h2" style={{ fontSize: "2rem" }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Open</Button>
      </CardActions>
    </Card>
  );
};

export default NoteListing;
