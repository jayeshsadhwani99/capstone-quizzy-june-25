import React from "react";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useSelector } from "react-redux";
import { Circle } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { setAssesmentKey } from "../../../../store/features/assesments/assesmentSlice";

function Progress() {
  const { questions, currentQuestionIndex } = useSelector(assesmentsSelector);
  const isAttempted = true;
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(
      setAssesmentKey({
        key: "currentQuestionIndex",
        value: index,
      }),
    );
  };

  return (
    <aside className="lg:w-1/4 w-1/3 border-l h-full p-2 overflow-auto">
      <h1 className="text-xl font-bold">Progress</h1>

      <div className="flex flex-col gap-2 mt-4">
        {questions.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              index === currentQuestionIndex ? "bg-blue-50" : ""
            } flex items-center gap-2 p-2 hover:bg-blue-50 cursor-pointer transition-all rounded`}>
            {isAttempted ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <Circle size={20} />
            )}{" "}
            Question {index + 1}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Progress;
