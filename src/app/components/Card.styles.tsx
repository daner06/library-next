import styled from "@emotion/styled";
import {
  backgroundSecondaryColor,
  backgroundTertiaryColor,
  borderPrimary,
  borderRadius,
  cardWidth,
  chartPrimaryColor,
  fontSecondaryColor,
} from "../styles";
import { PieChart } from "react-bootstrap-icons";

export const StyledCard = styled("div")`
  display: flex;
  flex-direction: row;
  width: ${cardWidth};
  padding: 1.25rem;
  background: ${backgroundTertiaryColor};
  border-radius: ${borderRadius};
  border: 0.0625rem solid ${borderPrimary};
  cursor: pointer;
`;

export const StyledIcon = styled(PieChart)`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  background: ${backgroundSecondaryColor};
  border: 0.0625rem solid ${borderPrimary};
  padding: 0.75rem;
  color: ${chartPrimaryColor};
`;

export const StyledH3 = styled("h3")`
  padding-bottom: 0.5rem;
`;

export const StyledDate = styled("p")`
  color: ${fontSecondaryColor};
  padding-top: 0.25rem;
`;
