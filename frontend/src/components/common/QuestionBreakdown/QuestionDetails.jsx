import React from "react";
import { getAnswerStyling, getCorrectAnswer } from "./utils";

function QuestionDetails({ question, answers }) {
  const answer = answers.find((answer) => answer.questionId === question._id);

  return (
    <div className="bg-gray-50 p-2 rounded-md flex flex-col gap-2">
      <div>
        <h3 className="font-semibold text-base">Question:</h3>
        {question.question}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-base">Your Answer:</h3>
          <p
            className={`${getAnswerStyling(
              answer.marksAwarded,
              question.marks,
            )} p-2 rounded-md`}>
            {answer.response}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base">Correct Answer:</h3>
          <p className="bg-green-100 text-green-800 p-2 rounded-md">
            {getCorrectAnswer(question)}
          </p>
        </div>
      </div>

      {question.explanations?.length > 0 && (
        <div className="bg-green-50 text-green-800 p-2 rounded-md border !border-green-300">
          <h3 className="font-semibold text-base">Explanation:</h3>
          {question.explanations?.map((explanation) => (
            <p key={explanation}>{explanation}</p>
          ))}
        </div>
      )}

      {answer.feedback && (
        <div>
          <h3 className="font-semibold text-base">Feedback:</h3>
          <p>{answer.feedback}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionDetails;
