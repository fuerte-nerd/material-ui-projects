import React from "react";

import { Box, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <Box>
      <Typography variant="h3" align="center" variantMapping={{ h3: "h1" }}>
        Scorecard
      </Typography>
    </Box>
  );
};

export default Header;
