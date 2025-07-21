import React from "react";
import HandleQuestionRender from "./HandleQuestionRender.jsx";
import ExplanationComponent from "./components/ExplanationComponent/index.jsx";
import AnswerComponent from "./components/AnswerComponent/index.jsx";
import HintComponent from "./components/HintComponent/index.jsx";
import { extractAnswer } from "./utils/extractAnswer.js";

function Question({ question }) {
  return (
    <div className="flex flex-col gap-4">
      {question.question && (
        <h2 className="text-2xl font-bold">{question.question}</h2>
      )}
      <HintComponent hints={question.hints} />

      <div>
        <HandleQuestionRender question={question} />
      </div>

      <div>
        <AnswerComponent answer={extractAnswer(question)} />
      </div>

      <div>
        <ExplanationComponent explanations={question.explanations} />
      </div>
    </div>
  );
}

export default Question;
