import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleViewer } from "../redux/actions";
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
  const [test, setTest] = useState("");

  const handleBackClick = () => {
    props.dispatch(toggleViewer());
  };

  const handleBodyChange = (e) => {
    setTest(e.target.value);
    console.log(test);
  };

  return (
    <Dialog open={props.isOpen} fullScreen transitionDuration={700}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleBackClick}>
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
        <TextField
          fullWidth
          id="title"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "6rem", fontWeight: 300 },
          }}
          value="Title"
        />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          12 April
        </Typography>
        <TextField
          fullWidth
          multiline
          id="body"
          value={test}
          onChange={handleBodyChange}
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
          }}
        />
      </Container>
    </Dialog>
  );
};
const mapStateToProps = (state) => ({
  isOpen: state.isViewerOpen,
});
export default connect(mapStateToProps)(NoteViewer);
