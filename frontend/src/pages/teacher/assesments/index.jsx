import React from "react";
import { useHeading } from "../../../hooks";

function TeacherAssesmentsPage() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Assesments");
  setSubheading("Create and manage your assesments here");

  return <div>TeacherAssesmentsPage</div>;
}

export default TeacherAssesmentsPage;
