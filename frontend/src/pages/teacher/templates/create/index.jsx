import React from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../components/Teacher/Templates/Create/BasicDetailsForm";
import CustomInput from "../../../../components/common/inputs/CustomInput";
import { InputTypes } from "../../../../components/common/inputs/CustomInput/types";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { questionOptions } from "../../../../utils/questionOptions";

function CreateTemplatePage() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Create Template");
  setSubheading("This will help you create multiple assesments");

  const [questionType, setQuestionType] = useState(null);

  return (
    <div>
      <TemplatesBasicDetailsForm />
      <hr className="my-4" />

      <CustomInput
        inputType={InputTypes.DROPDOWN}
        showLabel={false}
        value={questionType}
        onChange={setQuestionType}
        options={questionOptions}
        label={
          <div className="flex items-center gap-2 text-sm">
            <PlusIcon size={16} />{" "}
            {questionOptions.find((q) => q.id === questionType)?.label ??
              "Add Question Type"}
          </div>
        }
      />
    </div>
  );
}

export default CreateTemplatePage;
