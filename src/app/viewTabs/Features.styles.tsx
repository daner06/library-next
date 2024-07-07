import styled from "@emotion/styled";

import { fontSecondaryColor } from "../styles";

export const StyledFeaturesH2 = styled("h2")`
  padding-bottom: 1rem;
`;

export const StyledTrendingH2 = styled(StyledFeaturesH2)`
  margin-top: 1.75rem;
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
