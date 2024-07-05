import styled from "@emotion/styled";

import {
  backgroundSecondaryColor,
  backgroundTertiaryColor,
  borderPrimary,
  borderRadius,
  fontSecondaryColor,
} from "../styles";

export const StyledH2 = styled("h2")`
  padding-bottom: 1rem;
`;

export const StyledSubtitle = styled("p")`
  color: ${fontSecondaryColor};
`;

export const StyledCardsContainer = styled("div")`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const StyledCard = styled("div")`
  display: flex;
  flex-direction: row;
  width: 23.875rem;
  padding: 1.25rem;
  background: ${backgroundTertiaryColor};
  border-radius: ${borderRadius};
  border: 0.0625rem solid ${borderPrimary};
`;

export const StyledIcon = styled("div")`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  background: ${backgroundSecondaryColor};
  border: 0.0625rem solid ${borderPrimary};
`;

export const StyledH3 = styled("h3")`
  padding-bottom: 0.5rem;
`;
