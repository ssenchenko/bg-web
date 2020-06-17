import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";

// can be used within any other container
const SpinnerContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PageContainer = styled(Container)({
  width: "100vw",
  height: "100vh",
  display: "flex",
});

const Spinner: React.FC = () => (
  <SpinnerContainer>
    <CircularProgress />
  </SpinnerContainer>
);

export const PageSpinner: React.FC = () => (
  <PageContainer>
    <Spinner />
  </PageContainer>
);

export default Spinner;
