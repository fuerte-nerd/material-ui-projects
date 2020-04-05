import React from "react";
import { Container, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <header>
      <Container>
        <Typography align="center" variant="h1">
          Notes
        </Typography>
        <Typography align="center" variant="subtitle1">
          Your online notebook!
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
