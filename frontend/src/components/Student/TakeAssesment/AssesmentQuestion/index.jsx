import React from "react";
import Question from "../../../common/Question";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";

function AssesmentQuestion() {
  const { questions, currentQuestionIndex } = useSelector(assesmentsSelector);

  return (
    <main className="flex-1 h-full p-2 pl-0 overflow-auto">
      <Question
        question={questions[currentQuestionIndex]}
        config={{
          showAnswer: false,
          showExplanation: false,
          letUserAnswer: true,
        }}
      />
    </main>
  );
}

export default AssesmentQuestion;
