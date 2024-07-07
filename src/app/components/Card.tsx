import { StyledCard, StyledH3, StyledIcon } from "./Card.styles";

import { Item } from "../types";

export default function Card({ data }: { data: Item }) {
  const { title, description, date } = data;
  return (
    <StyledCard>
      <StyledIcon />
      <div>
        <StyledH3>{title}</StyledH3>
        <p>{description}</p>
        {date && <p>{date}</p>}
      </div>
    </StyledCard>
  );
}
