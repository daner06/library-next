import styled from "@emotion/styled";

// should be moved into the design template.
const backgroundPageColor = "#f8f9fc";
const backgroundSecondaryColor = "#f1f5f8";
const backgroundTertiaryColor = "#fff";
const fontPrimaryColor = "#000";
const borderPrimary = "#e2e7f1";

export const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  backgroud: ${backgroundPageColor};
`;

export const StyledH1 = styled("h1")`
  padding-bottom: 1.5rem;
`;

export const StyledDescription = styled("h3")`
  font-weight: 400;
`;

export const StyledSearchBar = styled("input")`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
  border: 1px solid ${borderPrimary};
  border-radius: 0.25rem;
  color: ${fontPrimaryColor};
  background: ${backgroundTertiaryColor};
`;

export const StyledTabs = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  background: ${backgroundSecondaryColor};
  width: 100%;
  height: 2.75rem;
  border-radius: 0.25rem;
`;

export const StyledTabButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: Boolean }>`
  background: ${({ active }) =>
    active ? backgroundTertiaryColor : backgroundSecondaryColor};
  color: ${fontPrimaryColor};
  width: 100%;
  border: none;
  margin: 0.375rem;
  border-radius: 0.25rem;
`;
