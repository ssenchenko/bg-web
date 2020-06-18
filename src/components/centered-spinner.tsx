import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import { FCWithDefaultProps } from "utils/general";

const SpinnerContainer = styled(Container)({
  // can be used within any other container
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PageContainer = styled(Container)({
  width: "100vw",
  height: "100vh",
  display: "flex",
});

interface ISpinnerProps {
  color: "inherit" | "primary" | "secondary";
  size: number | string;
  thickness: number;
}

const spinnerDefaultProps: ISpinnerProps = {
  color: "inherit",
  size: 40,
  thickness: 3.6,
};

const Spinner: FCWithDefaultProps<React.FC<ISpinnerProps>, typeof spinnerDefaultProps> = (
  props,
) => (
  // set parent display: flex, alignItems: stretch (default), so that spinner will cover full parent
  <SpinnerContainer>
    <CircularProgress {...props} />
  </SpinnerContainer>
);
Spinner.defaultProps = spinnerDefaultProps;

export const PageSpinner: React.FC = () => (
  <PageContainer>
    <Spinner />
  </PageContainer>
);

export default Spinner;
