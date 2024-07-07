import { useContext } from "react";
import HashTag from "../components/HashTag";
import BusinessQuestions from "./AssetModalBusinessQuestions";
import {
  StyledInfoIcon,
  StyledChart,
  StyledDataSummaryLine,
  StyledHashTagLine,
  StyledHeader,
  StyledSubtitle,
  StyledFavoriteItemButton,
  StyledBookmarkIcon,
  StyledDescription,
  StyledH2Wrapper,
  StyledLayoutChip,
  StyledGridIcon,
} from "./AssetModalContent.styles";
import MainContext from "../contexts/mainContext";

const hashTags = ["comms", "coverage", "stakeholders"];

export default function ModalContent() {
  const { setShowAssetModal } = useContext(MainContext);

  const favoriteItem = () => setShowAssetModal(false);

  return (
    <>
      <StyledHeader>
        <StyledGridIcon />
        <StyledH2Wrapper>
          <h2>Intes</h2>
          <StyledLayoutChip>Layout</StyledLayoutChip>
        </StyledH2Wrapper>
        <StyledSubtitle>Descriptive name of the Layout</StyledSubtitle>
        <StyledDescription>
          Those options are already baked in with this model shoot me an email
          clear blue water but we need distributors to evangelize the new line
          to local markets.
        </StyledDescription>
        <StyledHashTagLine>
          {hashTags.map((tag, index) => (
            <HashTag key={index} tag={tag} />
          ))}
        </StyledHashTagLine>
      </StyledHeader>
      <StyledDataSummaryLine>
        <div>
          <p>2485</p>
          <p>
            Used <StyledInfoIcon />
          </p>
        </div>
        <div>
          <p>Universal</p>
          <p>Type</p>
        </div>
        <div>
          <p>6</p>
          <p>
            Page No. <StyledInfoIcon />
          </p>
        </div>
        <div>
          <p>07/23/2024</p>
          <p>Last Updated</p>
        </div>
      </StyledDataSummaryLine>
      <StyledChart />
      <BusinessQuestions />
      <StyledFavoriteItemButton onClick={favoriteItem}>
        <StyledBookmarkIcon /> Favorite item
      </StyledFavoriteItemButton>
    </>
  );
}
