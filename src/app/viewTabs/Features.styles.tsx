import styled from "@emotion/styled";

import {
  backgroundSecondaryColor,
  backgroundTertiaryColor,
  borderPrimary,
  borderRadius,
  fontSecondaryColor,
} from "../styles";

export const StyledH2 = styled("h2")`
  margin-top: 2rem;
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
