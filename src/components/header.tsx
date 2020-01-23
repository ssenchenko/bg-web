import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@material-ui/core";
import { styled, useTheme } from "@material-ui/core/styles";
import SearchField from "./search";

const LandingHeader: React.FC = () => {
  const GrowingFiller = styled(Box)({
    flexGrow: 1,
  });

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <SearchField />
          <GrowingFiller />
          <Button>Become a host</Button>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingHeader;
