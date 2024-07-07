import styled from "@emotion/styled";
import {
  backgroundQuaternaryColor,
  borderPrimary,
  borderRadius,
  fontSecondaryColor,
} from "../styles";

export const StyledContainer = styled("div")`
  background: ${backgroundQuaternaryColor};
  padding: 0.1rem 0.5rem;
  border-radius: ${borderRadius};
  border: 0.0625rem solid ${borderPrimary};
  color: ${fontSecondaryColor};
  font-size: 0.875rem;
`;
