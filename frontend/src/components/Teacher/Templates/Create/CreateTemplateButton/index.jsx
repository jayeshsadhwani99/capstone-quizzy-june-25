import React from "react";
import CustomButton from "../../../../common/CustomButton";
import { Save } from "lucide-react";
import { useCreateTemplateMutation } from "../../../../../store/features/template/api";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../../store/features/template/selectors";
import { stateToTemplate } from "../../../../../store/features/template/utils";

function CreateTemplateButton() {
  const [triggerCreate, { isLoading }] = useCreateTemplateMutation();
  const template = useSelector(templateSelector);

  const handleClick = () => {
    if (isLoading) return;
    triggerCreate(stateToTemplate(template));
  };

  return (
    <CustomButton disabled={isLoading} onClick={handleClick} className={"my-4"}>
      <Save size={15} /> Save Template
    </CustomButton>
  );
}

export default CreateTemplateButton;
