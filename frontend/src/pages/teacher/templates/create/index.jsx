import React from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../components/Teacher/Templates/Create/BasicDetailsForm";

function CreateTemplatePage() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Create Template");
  setSubheading("This will help you create multiple assesments");

  return (
    <div>
      <TemplatesBasicDetailsForm />
    </div>
  );
}

export default CreateTemplatePage;
