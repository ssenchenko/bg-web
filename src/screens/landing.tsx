import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { styled, useTheme } from "@material-ui/core/styles";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
  const theme = useTheme();

  const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  });

  return <StyledBox>{children}</StyledBox>;
};

const LandingScreen: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <PageLayout>
          <Typography>Hello</Typography>
        </PageLayout>
      </Container>
    </>
  );
};

export default LandingScreen;
