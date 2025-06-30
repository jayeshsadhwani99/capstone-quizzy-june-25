import React from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../components/Teacher/Templates/Create/BasicDetailsForm";
import AddQuestionType from "../../../../components/Teacher/Templates/Create/AddQuestionType";
import QuestionTypes from "../../../../components/Teacher/Templates/QuestionTypes";

function CreateTemplatePage() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Create Template");
  setSubheading("This will help you create multiple assesments");

  return (
    <div>
      <TemplatesBasicDetailsForm />
      <hr className="my-4" />

      <QuestionTypes />

      <AddQuestionType />
    </div>
  );
}

export default CreateTemplatePage;
