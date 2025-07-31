import React from "react";
import { getMarksStyling } from "./utils";

function QuestionTitle({ question, index, answers }) {
  const answer = answers.find((answer) => answer.questionId === question._id);

  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <p className="flex-1 truncate">
        Q{index + 1}. {question.question}
      </p>

      <div
        className={`${getMarksStyling(
          answer.marksAwarded,
          question.marks,
        )} text-sm bg-gray-100 p-2 rounded-md w-fit shrink-0 font-semibold`}>
        {answer.marksAwarded} / {question.marks}
      </div>
    </div>
  );
}

export default QuestionTitle;
