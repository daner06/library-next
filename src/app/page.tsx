"use client";

import styles from "./page.module.css";
import {
  StyledContainer,
  StyledDescription,
  StyledH1,
  StyledRequestButton,
  StyledRequestIcon,
  StyledSearchBar,
  StyledTabButton,
  StyledTabs,
  StyledViewContainer,
} from "./page.styles";
import { useState } from "react";
import { Featured, KPI, Layouts, Storyboards } from "./viewTabs";
import { Tab } from "./types";
import AssetModal from "./assetModal/AssetModal";

const tabs: Tab[] = [
  {
    key: "featured",
    text: "Featured",
    view: <Featured />,
  },
  {
    key: "kpi",
    text: "KPI",
    view: <KPI />,
  },
  {
    key: "layouts",
    text: "Layouts",
    view: <Layouts />,
  },
  {
    key: "storyboards",
    text: "Storyboards",
    view: <Storyboards />,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabClick = (key: string) => setActiveTab(key);

  const viewTab = tabs.find((tab) => tab.key === activeTab)?.view;

  return (
    <>
      <AssetModal />
      <StyledRequestButton>
        <StyledRequestIcon />
        Request
      </StyledRequestButton>
      <main className={styles.main}>
        <div className={styles.description}>
          <StyledContainer>
            <StyledH1>Library</StyledH1>
            <StyledDescription>
              Browse for assets needed to report and present analysis.
            </StyledDescription>
            <StyledSearchBar
              id="search"
              type="search"
              placeholder="Type to search..."
            />
            <StyledTabs>
              {tabs.map((tab) => {
                const { key, text } = tab;
                return (
                  <StyledTabButton
                    key={key}
                    active={activeTab === key}
                    onClick={() => handleTabClick(key)}
                  >
                    {text}
                  </StyledTabButton>
                );
              })}
            </StyledTabs>
            <StyledViewContainer>{viewTab}</StyledViewContainer>
          </StyledContainer>
        </div>
      </main>
    </>
  );
}
