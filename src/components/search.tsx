import React from "react";
import { styled } from "@material-ui/core/styles";
import { InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ThemedProps } from "../settings";

const SearchField: React.FC = () => {
  const SearchWrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3), // to separate from logo
    },
  }));

  const SearchIconWrapper = styled(Box)(({ theme }: ThemedProps<{}>) => ({
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
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputStyled placeholder="Where?" inputProps={{ "aria-label": "where" }} />
    </SearchWrapper>
  );
};

export default SearchField;
