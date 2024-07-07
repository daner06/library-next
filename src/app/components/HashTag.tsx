import { StyledContainer } from "./HashTag.styles";

export default function HashTag({ tag }: { tag: string }) {
  return <StyledContainer>&#35;{tag}</StyledContainer>;
}
