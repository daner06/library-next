import styled from "@emotion/styled";
import { Box } from "react-bootstrap-icons";
import {
  backgroundPrimaryColor,
  backgroundSecondaryColor,
  backgroundTertiaryColor,
  borderPrimary,
  borderRadius,
  buttonBackgroundColor,
  fontPrimaryColor,
} from "./styles";

export const StyledRequestButton = styled("button")`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: ${borderRadius};
  background: ${buttonBackgroundColor};
`;

export const StyledRequestIcon = styled(Box)`
  margin-right: 0.5rem;
`;

export const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  backgroud: ${backgroundPrimaryColor};
`;

export const StyledH1 = styled("h1")`
  padding-bottom: 1.5rem;
`;

export const StyledDescription = styled("h3")`
  font-weight: 400;
`;

export const StyledSearchBar = styled("input")`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
  border: 0.0625rem solid ${borderPrimary};
  border-radius: ${borderRadius};
  color: ${fontPrimaryColor};
  background: ${backgroundTertiaryColor};
`;

export const StyledTabs = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  background: ${backgroundSecondaryColor};
  width: 100%;
  height: 2.75rem;
  border-radius: ${borderRadius};
`;

export const StyledTabButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: Boolean }>`
  background: ${({ active }) =>
    active ? backgroundTertiaryColor : backgroundSecondaryColor};
  color: ${fontPrimaryColor};
  width: 100%;
  border: none;
  margin: 0.375rem;
  border-radius: ${borderRadius};
  cursor: pointer;
`;

export const StyledViewContainer = styled("div")`
  margin-top: 1.5rem;
  width: 100%;
`;
