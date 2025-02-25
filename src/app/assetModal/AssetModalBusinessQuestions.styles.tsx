import styled from "@emotion/styled";
import {
  backgroundSecondaryColor,
  borderRadius,
  cardWidth,
  fontSecondaryColor,
} from "../styles";

export const StyledContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 100%;

  & div:first-of-type {
    background: ${backgroundSecondaryColor};
  }
`;

export const StyledCard = styled("div")`
  width: ${cardWidth};
  padding: 1.25rem;
  border-radius: ${borderRadius};
`;

export const StyledQuestion = styled("p")`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const StyledDescription = styled("p")`
  color: ${fontSecondaryColor};
  font-size: 0.875rem;
`;
