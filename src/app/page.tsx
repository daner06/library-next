"use client";

import styles from "./page.module.css";
import { StyledContainer, StyledH1, StyledSearchBar } from "./page.styles";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <StyledContainer>
          <StyledH1>Library</StyledH1>
          <p>Browse for assets needed to report and present analysis.</p>
          <StyledSearchBar
            id="search"
            type="search"
            placeholder="Type to search..."
          />
        </StyledContainer>
      </div>
    </main>
  );
}
