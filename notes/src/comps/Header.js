import React from "react";
import { Container, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <header>
      <Container>
        <Typography align="center" variant="h1">
          Notes
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          color="textSecondary"
          style={{ fontStyle: "italic" }}
        >
          "Either write something worth reading or do something worth writing."
          <span style={{ display: "block" }}>Benjamin Franklin</span>
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
