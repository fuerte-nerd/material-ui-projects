import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Helmet from "react-helmet";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
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
      <Box>
        <Container>
          <Typography variant="h1">A simple todo app</Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
