import React from "react";
import ChipComponent from "../ChipComponent";
import Question from "./index.jsx";
import { assesmentsSelector } from "../../../store/features/assesments/assesmentSlice.js";
import { useSelector } from "react-redux";
import { ChipTypes } from "../ChipComponent/types/ChipTypes.js";
import { questionOptions } from "../../../utils/questionOptions.js";

function FullQuestionComponent({ question, index }) {
  const { questions = [] } = useSelector(assesmentsSelector);

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2 my-2">
        <ChipComponent
          text={`Question ${index + 1} of ${questions.length}`}
          type={ChipTypes.PRIMARY}
        />
        <ChipComponent
          text={`${
            questionOptions.find((op) => op.id === question.type)?.label
          }`}
          type={ChipTypes.SECONDARY}
        />
      </div>
      <Question question={question} />
    </div>
  );
}

export default FullQuestionComponent;
