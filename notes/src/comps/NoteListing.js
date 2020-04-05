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
  return (
    <Grid item xs={12} md={6}>
      <Card style={{ marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h4" variantMapping={{ h4: "h2" }}>
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Open</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NoteListing;
