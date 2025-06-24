import React from "react";
import { useHeading } from "../../../hooks";

function TeacherTemplatesPage() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Templates");
  setSubheading("This is the place where you can manage your templates");

  return <div>TeacherTemplatesPage</div>;
}

export default TeacherTemplatesPage;
