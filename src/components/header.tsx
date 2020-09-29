import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Search from "./search";
import { ButtonImportantOutlined } from "./buttons";
import { ThemedProps } from "theme";

const LandingHeader: React.FC = () => {
  const GrowingFiller = styled(Box)({
    flexGrow: 1,
  });

  const RightControls: React.FC = () => {
    const Wrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "space-evenly",
      alignItems: "stretch",
    }));

    const UpperRow = styled(Box)(({ theme }: ThemedProps<{}>) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    }));

    const LowerRow = styled(Box)({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    });

    return (
      <Wrapper>
        <UpperRow>
          <ButtonImportantOutlined text="Become a host" />
          <ButtonImportantOutlined text="Sign Up" />
          <ButtonImportantOutlined text="Log In" />
        </UpperRow>
        <LowerRow>
          <Button variant="text">How it works?</Button>
        </LowerRow>
      </Wrapper>
    );
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar variant="dense">
          <Search />
          <GrowingFiller />
          <RightControls />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingHeader;
