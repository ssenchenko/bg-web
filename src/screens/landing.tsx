import React from "react";
import { Container, Box } from "@material-ui/core";
import { styled, useTheme } from "@material-ui/core/styles";
import LandingHeader from "components/header";

const LandingScreen: React.FC = () => {
  const theme = useTheme();

  const PageLayout = styled(Box)({
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
  });

  return (
    <>
      <Container maxWidth="lg">
        <PageLayout>
          <LandingHeader />
        </PageLayout>
      </Container>
    </>
  );
};

export default LandingScreen;
