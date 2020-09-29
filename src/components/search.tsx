import React from "react";
import { styled } from "@material-ui/core/styles";
import { InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ThemedProps } from "../theme";
import { ButtonMostImportant } from "./buttons";

// const Dimensions = {
//   marginRightSpacing: 2,
//   marginLeft: 0,
// };

const SearchField: React.FC = () => {
  const Wrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    width: "auto",
  }));

  const IconWrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const InputStyled = styled(InputBase)(({ theme }: ThemedProps<{}>) => ({
    "&> input": {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: theme.spacing(19),
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(38),
      },
    },
  }));

  return (
    <Wrapper>
      <IconWrapper>
        <SearchIcon color="primary" />
      </IconWrapper>
      <InputStyled placeholder="Where?" inputProps={{ "aria-label": "where" }} />
    </Wrapper>
  );
};

const SearchControls: React.FC = () => {
  const Wrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
    display: "flex",
    justifyContent: "space-between",
    width: theme.spacing(19 + 8),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(38 + 8),
    },
  }));

  return (
    <Wrapper>
      <ButtonMostImportant variant="contained">When</ButtonMostImportant>
      <ButtonMostImportant variant="contained">Guests</ButtonMostImportant>
      <ButtonMostImportant variant="contained">Price</ButtonMostImportant>
    </Wrapper>
  );
};

const Search: React.FC = () => {
  const Wrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3), // to separate from logo
    },
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  }));

  return (
    <Wrapper>
      <SearchField />
      <SearchControls />
    </Wrapper>
  );
};

export default Search;
