import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
          top: "2rem",
          right: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AddIcon />
      </Fab>
      <Box>
        <Container>
          <Typography variant="h1">A simple todo app</Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
