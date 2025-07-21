import React from "react";
import HandleQuestionRender from "./HandleQuestionRender.jsx";
import ExplanationComponent from "./components/ExplanationComponent/index.jsx";
import AnswerComponent from "./components/AnswerComponent/index.jsx";
import HintComponent from "./components/HintComponent/index.jsx";

function Question({ question }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        What is the primary use of react hooks?
      </h2>
      <HintComponent hints={[]} />

      <div>
        <HandleQuestionRender type={question.type} />
      </div>

      <div>
        <AnswerComponent answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, accusantium?" />
      </div>

      <div>
        <ExplanationComponent explanation="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, accusantium?" />
      </div>
    </div>
  );
}

export default Question;
