"use client";

import Card from "../components/Card";
import { Item } from "../types";
import {
  StyledCardsContainer,
  StyledH2,
  StyledSubtitle,
} from "./Features.styles";

const featuresItems: Item[] = [
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

const trendingsItems: Item[] = [
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

const Features = () => {
  return (
    <>
      <StyledH2>Features</StyledH2>
      <StyledSubtitle>Curated top picks from this week</StyledSubtitle>
      <StyledCardsContainer>
        {featuresItems.map((data) => (
          <Card key={data.key} data={data} />
        ))}
      </StyledCardsContainer>
    </>
  );
};

const Trending = () => {
  return (
    <>
      <StyledH2>Trending</StyledH2>
      <StyledSubtitle>Most popular by community</StyledSubtitle>
      <StyledCardsContainer>
        {trendingsItems.map((data) => (
          <Card key={data.key} data={data} />
        ))}
      </StyledCardsContainer>
    </>
  );
};

export default function Featured() {
  return (
    <>
      <Features />
      <Trending />
    </>
  );
}
