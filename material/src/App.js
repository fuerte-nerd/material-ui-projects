import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Todos from "./comps/Todos";

import Helmet from "react-helmet";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
        }}
      >
        <AddIcon />
      </Fab>
      <Container>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h1">A simple todo app</Typography>
          <Typography variant="subtitle2">by David Andrews</Typography>
        </Box>
        <Box>
          <Todos />
        </Box>
      </Container>
    </>
  );
}

export default App;
