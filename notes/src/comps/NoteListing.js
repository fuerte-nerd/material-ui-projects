import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const NoteListing = (props) => {
  const { id, title, locked, create_date, modified_date, body } = props.data;

  const excerpt = () => {
    return body.length > 150 ? body.substr(0, 150) + "..." : body;
  };

  return (
    <Grid item xs={12} md={6}>
      <Card style={{ marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h4" variantMapping={{ h4: "h2" }} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{excerpt()}</Typography>
        </CardContent>
        <CardActions>
          <Button>Open</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NoteListing;
