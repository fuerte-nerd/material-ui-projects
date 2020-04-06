import React, { useState } from "react";
import {
  Container,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography>Main Menu</Typography>
          <span style={{ flex: 1 }} />
          <IconButton
            onClick={handleClick}
            aria-controls="mainmenu"
            edge="end"
            color="inherit"
          >
            <MoreVert />
          </IconButton>
          <Menu id="mainmenu" open={isOpen} onClose={handleClick}>
            <MenuItem>New note</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
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
