import React from "react";
import { InputTypes } from "../../../../common/inputs/CustomInput/types";
import CustomInput from "../../../../common/inputs/CustomInput";

function TemplatesBasicDetailsForm() {
  return (
    <div className="flex flex-col border rounded-md p-2 gap-2">
      <h1 className="text-lg font-bold border-b pb-2">Basic Details</h1>
      <form className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.TEXT}
          label="Title"
          placeholder="Example template title"
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          label="Description"
          placeholder="This template is used to..."
        />

        <div className="flex gap-4">
          <CustomInput
            inputType={InputTypes.TEXT}
            label="Subject"
            placeholder="e.g, Math, Science, Psycology..."
          />
          <CustomInput
            inputType={InputTypes.TEXT}
            label="Grade Level"
            placeholder="e.g, 9, 12, College 1st Year..."
          />
        </div>
      </form>
    </div>
  );
}

export default TemplatesBasicDetailsForm;
