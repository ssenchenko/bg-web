import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SearchField from "./search";
import { ThemedProps } from "../settings";

const LandingHeader: React.FC = () => {
  const GrowingFiller = styled(Box)({
    flexGrow: 1,
  });

  const TwoRowContainer = styled(Container)({
    flexDirection: "row",
  });

  const SearchButtonsContainer = styled(Box)(({ theme }: ThemedProps<{}>) => ({
    display: "flex",
    justifyContent: "space-between",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: theme.spacing(19 + 8),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: theme.spacing(38 + 8),
    },
  }));

  return (
    <AppBar>
      <TwoRowContainer maxWidth="lg">
        <Toolbar>
          <SearchField />
          <GrowingFiller />
          <Button>Become a host</Button>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </Toolbar>
        <Toolbar>
          <SearchButtonsContainer>
            <Button>When</Button>
            <Button>Guests</Button>
            <Button>Price</Button>
          </SearchButtonsContainer>
          <GrowingFiller />
          <Button>How does it work?</Button>
        </Toolbar>
      </TwoRowContainer>
    </AppBar>
  );
};

export default LandingHeader;
