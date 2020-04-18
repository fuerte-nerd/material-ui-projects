import React from "react";
import { Container, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography
          align="center"
          color="textSecondary"
          display="block"
          variant="overline"
        >
          &copy; 2020{" "}
          {new Date().getFullYear() === 2020
            ? null
            : ` - ${new Date().getFullYear()} `}
          David Andrews
        </Typography>
      </Container>{" "}
    </footer>
  );
};

export default Footer;
