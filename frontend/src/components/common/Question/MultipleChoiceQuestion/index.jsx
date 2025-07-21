import React from "react";
import HintComponent from "../components/HintComponent/index.jsx";
import ExplanationComponent from "../components/ExplanationComponent/index.jsx";
import AnswerComponent from "../components/AnswerComponent/index.jsx";

const hints = [
  "React Hooks are a feature that allows you to use state and other React features without writing a class.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, sed!",
];

function MultipleChoiceQuestion() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        What is the primary use of react hooks?
      </h2>
      <HintComponent hints={hints} />

      <div>{/* Options */}</div>

      <div>
        <AnswerComponent answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, accusantium?" />
      </div>

      <div>
        <ExplanationComponent explanation="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, accusantium?" />
      </div>
    </div>
  );
}

export default MultipleChoiceQuestion;
