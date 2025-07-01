import React from "react";
import { useHeading } from "../../../hooks";
import CustomTable from "../../../components/common/CustomTable";
import { templateColumns } from "./utils";
import { useTemplatesData } from "./hooks";

function TeacherTemplatesPage() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Templates");
  setSubheading("This is the place where you can manage your templates");

  const { rows = [], actions = [] } = useTemplatesData();

  return (
    <div>
      <CustomTable columns={templateColumns} data={rows} actions={actions} />
    </div>
  );
}

export default TeacherTemplatesPage;
