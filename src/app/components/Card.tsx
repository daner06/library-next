import { useContext } from "react";
import MainContext from "../contexts/MainContext";
import { StyledCard, StyledDate, StyledH3, StyledIcon } from "./Card.styles";
import { Item } from "../types";

export default function Card({ data }: { data: Item }) {
  const { setShowAssetModal } = useContext(MainContext);

  const { title, description, date } = data;

  const handleCardClick = () => setShowAssetModal(true);

  return (
    <StyledCard onClick={handleCardClick}>
      <StyledIcon />
      <div>
        <StyledH3>{title}</StyledH3>
        <p>{description}</p>
        {date ? <StyledDate>{date}</StyledDate> : null}
      </div>
    </StyledCard>
  );
}
