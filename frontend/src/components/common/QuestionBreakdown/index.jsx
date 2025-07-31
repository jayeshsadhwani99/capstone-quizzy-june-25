import React from "react";
import QuestionTitle from "./QuestionTitle";
import QuestionDetails from "./QuestionDetails";

function QuestionBreakdown({ data }) {
  console.log("data", data);
  const questions = data?.assesmentId?.questions ?? [];
  const answers = data?.answers ?? [];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Question Breakdown</h2>

      <div className="flex flex-col gap-2">
        {questions.map((question, index) => (
          <>
            <QuestionTitle
              question={question}
              index={index}
              answers={answers}
              key={question._id}
            />
            <QuestionDetails question={question} answers={answers} />
          </>
        ))}
      </div>
    </div>
  );
}

export default QuestionBreakdown;
