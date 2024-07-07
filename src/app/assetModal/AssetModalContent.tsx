import HashTag from "../components/HashTag";
import {
  StyledInfoIcon,
  StyledChart,
  StyledDataSummaryLine,
  StyledHashTagLine,
  StyledHeader,
  StyledSubtitle,
} from "./AssetModalContent.styles";

const hashTags = ["comms", "coverage", "stakeholders"];

export default function ModalContent() {
  return (
    <>
      <StyledHeader>
        <h2>Intes</h2>
        <StyledSubtitle>Descriptive name of the Layout</StyledSubtitle>
        <p>
          Those options are already baked in with this model shoot me an email
          clear blue water but we need distributors to evangelize the new line
          to local markets.
        </p>
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
    </>
  );
}
