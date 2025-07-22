import React from "react";
import CustomButton from "../../../common/CustomButton";
import { useDispatch } from "react-redux";
import {
  assesmentsSelector,
  setAssesmentKey,
} from "../../../../store/features/assesments/assesmentSlice";
import { useSelector } from "react-redux";
import { Save } from "lucide-react";
import { ChevronRight } from "lucide-react";

function NextButton() {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector(assesmentsSelector);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      console.log("submit");
      return;
    }

    dispatch(
      setAssesmentKey({
        key: "currentQuestionIndex",
        value: currentQuestionIndex + 1,
      }),
    );
  };

  return (
    <CustomButton onClick={handleNext}>
      {isLastQuestion ? "Submit" : "Next"}{" "}
      {isLastQuestion ? <Save size={15} /> : <ChevronRight size={15} />}
    </CustomButton>
  );
}

export default NextButton;
