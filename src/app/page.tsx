"use client";

import styles from "./page.module.css";
import styled from "@emotion/styled";

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
`;

const StyledH1 = styled("h1")`
  padding-bottom: 1.5rem;
`;

const StyledSearchBar = styled("input")`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
`;

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
