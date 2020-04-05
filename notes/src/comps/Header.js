import React from "react";
import { Container, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <header>
      <Container>
        <Typography variant="h1">Notes</Typography>
        <Typography variant="subtitle1">Your online notebook!</Typography>
      </Container>
    </header>
  );
};

export default Header;
