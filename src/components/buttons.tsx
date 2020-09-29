import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button, useTheme } from "@material-ui/core";
import { ThemedProps } from "../theme";

const ButtonMostImportant = styled(Button)(({ theme }: ThemedProps<{}>) => ({
  color: theme.palette.primary.dark,
  fontWeight: "bold",
}));

// prop called 'hexColor' to distinguish with Button.color? which has type Color ("primary" | "secondary" | etc)
const ButtonImportant = styled(Button)(({ hexColor }: { hexColor: string }) => ({
  color: hexColor,
  fontWeight: "bold",
  borderColor: hexColor,
}));

const ButtonImportantOutlined = ({ text }: { text: string }) => {
  const theme = useTheme();
  return (
    <ButtonImportant variant="outlined" hexColor={theme.palette.background.default}>
      {text}
    </ButtonImportant>
  );
};

export { ButtonMostImportant, ButtonImportant, ButtonImportantOutlined };
