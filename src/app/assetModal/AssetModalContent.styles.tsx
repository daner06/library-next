import styled from "@emotion/styled";
import {
  backgroundSecondaryColor,
  backgroundQuinaryColor,
  borderPrimary,
  fontSecondaryColor,
  borderRadius,
} from "../styles";
import { InfoCircle, Bookmark } from "react-bootstrap-icons";

export const StyledHeader = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSubtitle = styled("p")`
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: ${fontSecondaryColor};
`;

export const StyledHashTagLine = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const StyledDataSummaryLine = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  font-size: 0.875rem;

  & > div {
    text-align: center;
    width: 100%;
    :not(:last-child) {
      border-right: 0.0625rem solid ${borderPrimary};
    }

    & > p:first-child {
      font-weight: 600;
    }

    & > p:last-child {
      color: ${fontSecondaryColor};
    }
  }
`;

export const StyledInfoIcon = styled(InfoCircle)`
  width: 0.65rem;
  height: 0.65rem;
`;

export const StyledChart = styled("div")`
  height: 18rem;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  background: ${backgroundSecondaryColor};
`;

export const StyledFavoriteItemButton = styled("button")`
  width: 100%;
  background: ${backgroundQuinaryColor};
  border-radius: ${borderRadius};
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border: none;
`;

export const StyledBookmarkIcon = styled(Bookmark)`
  width: 0.65rem;
  height: 0.65rem;
`;
