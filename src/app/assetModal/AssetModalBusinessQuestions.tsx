import { Question } from "../types";
import {
  StyledCard,
  StyledContainer,
  StyledDescription,
  StyledQuestion,
} from "./AssetModalBusinessQuestions.styles";

const questions: Question[] = [
  {
    key: 0,
    question: "Question 1",
    description: "Short description of the item goes nicely here.",
  },
  {
    key: 1,
    question: "Question 2",
    description: "Short description of the item goes nicely here.",
  },
  {
    key: 2,
    question: "Question 3",
    description: "Short description of the item goes nicely here.",
  },
  {
    key: 3,
    question: "Question 4",
    description: "Short description of the item goes nicely here.",
  },
];

export default function BusinessQuestions() {
  return (
    <StyledContainer>
      {questions.map((q) => {
        const { key, question, description } = q;
        return (
          <StyledCard key={key}>
            <StyledQuestion>{question}</StyledQuestion>
            <StyledDescription>{description}</StyledDescription>
          </StyledCard>
        );
      })}
    </StyledContainer>
  );
}
