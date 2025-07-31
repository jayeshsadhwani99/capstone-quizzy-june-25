import React from "react";
import QuestionAccordion from "./QuestionAccordion";

function QuestionBreakdown({ data }) {
  const questions = data?.assesmentId?.questions ?? [];
  const answers = data?.answers ?? [];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Question Breakdown</h2>

      <div className="flex flex-col gap-2">
        {questions.map((question, index) => (
          <QuestionAccordion
            question={question}
            index={index}
            answers={answers}
            key={question._id}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionBreakdown;
