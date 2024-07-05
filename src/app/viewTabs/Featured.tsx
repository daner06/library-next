"use client";

import { Item } from "../types";
import {
  StyledCard,
  StyledCardsContainer,
  StyledH2,
  StyledH3,
  StyledIcon,
  StyledSubtitle,
} from "./Features.styles";

const features: Item[] = [
  {
    key: 1,
    title: "Item Name",
    description: "Short description of the item goes nicely here.",
  },
  {
    key: 2,
    title: "Item Name",
    description: "Short description of the item goes nicely here.",
    date: "06/27/2024",
  },
  {
    key: 3,
    title: "Item Name",
    description: "Short description of the item goes nicely here.",
    date: "06/27/2024",
  },
  {
    key: 4,
    title: "Item Name",
    description: "Short description of the item goes nicely here.",
    date: "06/27/2024",
  },
];

export default function Featured() {
  return (
    <>
      <StyledH2>Features</StyledH2>
      <StyledSubtitle>Curated top picks from this week</StyledSubtitle>
      <StyledCardsContainer>
        {features.map((feature) => (
          <StyledCard key={feature.key}>
            <StyledIcon />
            <div>
              <StyledH3>{feature.title}</StyledH3>
              <p>{feature.description}</p>
              {feature.date && <p>{feature.date}</p>}
            </div>
          </StyledCard>
        ))}
      </StyledCardsContainer>
    </>
  );
}
