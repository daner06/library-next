"use client";

import styles from "./page.module.css";
import {
  StyledContainer,
  StyledDescription,
  StyledH1,
  StyledSearchBar,
  StyledTabButton,
  StyledTabs,
} from "./page.styles";
import { useState } from "react";

type Tabs = {
  key: string;
  text: string;
};

const tabs: Tabs[] = [
  {
    key: "featured",
    text: "Featured",
  },
  {
    key: "kpi",
    text: "KPI",
  },
  {
    key: "layouts",
    text: "Layouts",
  },
  {
    key: "storyboards",
    text: "Storyboards",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("featured");

  const handleTabClick = (key: string) => setActiveTab(key);

  return (
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
        </StyledContainer>
      </div>
    </main>
  );
}
