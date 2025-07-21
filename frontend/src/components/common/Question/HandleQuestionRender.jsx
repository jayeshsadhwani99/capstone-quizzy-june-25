import React from "react";
import { QuestionTypes } from "../../../types/index.js";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion/index.jsx";
import ShortAnswerQuestion from "./ShortAnswerQuestion/index.jsx";
import LongAnswerQuestion from "./LongAnswerQuestion/index.jsx";

function HandleQuestionRender({ question }) {
  switch (question.type) {
    case QuestionTypes.MULTIPLE_CHOICE:
      return <MultipleChoiceQuestion question={question} />;
    case QuestionTypes.SHORT_ANSWER:
      return <ShortAnswerQuestion />;
    case QuestionTypes.LONG_ANSWER:
      return <LongAnswerQuestion />;
    default:
      return null;
  }
}

export default HandleQuestionRender;
