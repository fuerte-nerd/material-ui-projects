import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { ArrowBack, LockOpen, Lock, Delete } from "@material-ui/icons";

const dummyBody =
  "Ipsum dolores consequatur hic accusamus possimus? Totam voluptatibus rem excepturi saepe quia, eum iusto? Cupiditate minus repellendus quidem maxime nobis Placeat laborum corrupti dignissimos eum sit! Nisi illo cum omnis nisi repellendus optio? Quia praesentium libero reiciendis non veritatis. Tempora quibusdam eaque enim aut labore? Et dolorum omnis tenetur fugit?\n\nMore text here.";

const NoteViewer = (props) => {
  return (
    <Dialog open={true} fullScreen>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <ArrowBack />
          </IconButton>
          <Typography style={{ flex: 1 }}>Note Viewer</Typography>
          <IconButton color="inherit">
            <LockOpen />
          </IconButton>
          <IconButton color="inherit" i edge="end">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
        <TextField id="title" />
        <Typography variant="h1">Title</Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          12 April
        </Typography>
        <Typography>
          <ReactMarkdown source={dummyBody} />
        </Typography>
      </Container>
    </Dialog>
  );
};

export default NoteViewer;
