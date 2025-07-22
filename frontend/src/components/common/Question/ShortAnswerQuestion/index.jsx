import React from "react";
import CustomInput from "../../inputs/CustomInput";
import { InputTypes } from "../../inputs/CustomInput/types";
import { useState } from "react";

function ShortAnswerQuestion({ letUserAnswer = false }) {
  const [answer, setAnswer] = useState("");

  return (
    <CustomInput
      inputType={InputTypes.TEXT}
      value={answer}
      onChange={setAnswer}
      placeholder="Enter your answer..."
      disabled={!letUserAnswer}
    />
  );
}

export default ShortAnswerQuestion;
