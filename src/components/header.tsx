import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SearchField from "./search";
import { ThemedProps } from "../theme";

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

  const MostImportantButton = styled(Button)(({ theme }: ThemedProps<{}>) => ({
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  }));

  // const ImportantButton =

  return (
    <AppBar>
      <TwoRowContainer maxWidth="lg">
        <Toolbar variant="dense">
          <SearchField />
          <GrowingFiller />
          <Button variant="outlined">Become a host</Button>
          <Button variant="outlined">Sign Up</Button>
          <Button variant="outlined">Log In</Button>
        </Toolbar>
        <Toolbar variant="dense">
          <SearchButtonsContainer>
            <MostImportantButton variant="contained">When</MostImportantButton>
            <MostImportantButton variant="contained">Guests</MostImportantButton>
            <MostImportantButton variant="contained">Price</MostImportantButton>
          </SearchButtonsContainer>
          <GrowingFiller />
          <Button>How does it work?</Button>
        </Toolbar>
      </TwoRowContainer>
    </AppBar>
  );
};

export default LandingHeader;
