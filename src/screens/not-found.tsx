import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";

const LandingScreen: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Container maxWidth="lg">
        <Typography>
          No match for <code>{location.pathname}</code>
        </Typography>
      </Container>
    </>
  );
};

export default LandingScreen;
