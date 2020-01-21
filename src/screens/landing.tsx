import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { styled, useTheme } from "@material-ui/core/styles";

class PageLayout extends React.Component<{}, {}> {
  render() {
    const theme = useTheme();
    const layout = styled(Box)({
      display: "flex",
      flexDirection: "column-reverse",
      [theme.breakpoints.up("md")]: {
        flexDirection: "column",
      },
    });
    return layout;
  }
}

const LandingScreen: React.FC = () => (
  <>
    <Container maxWidth="lg">
      <PageLayout>
        <Typography>Hello</Typography>
      </PageLayout>
    </Container>
  </>
);

export default LandingScreen;
