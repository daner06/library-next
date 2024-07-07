import styled from "@emotion/styled";
import { X } from "react-bootstrap-icons";
import {
  backgroundTertiaryColor,
  borderPrimary,
  borderRadius,
  fontPrimaryColor,
} from "../styles";

export const StyledModal = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: Boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 2;
  padding-top: 6.25rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.4);
`;

export const StyledModalContent = styled("div")`
  background: ${backgroundTertiaryColor};
  color: ${fontPrimaryColor};
  margin: auto;
  padding: 1.25rem;
  border-radius: ${borderRadius};
  border: 0.0625rem solid ${borderPrimary};
  width: 80%;
`;

export const StyledCloseButtonWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const StyledCloseButtonIcon = styled("button")`
  self-align: flex-end;
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  border: none;
  background: transparent;
`;

export const StyledCloseIcon = styled(X)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${fontPrimaryColor};
`;
