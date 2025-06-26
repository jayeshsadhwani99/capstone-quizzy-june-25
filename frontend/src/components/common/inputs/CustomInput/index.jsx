import React from "react";
import HandleInputRender from "./HandleInputRender";
import { LabelPositionTypes } from "./types";
import { handleLabelPosition } from "./utils";

function CustomInput(props) {
  const {
    id,
    label,
    labelPosition = LabelPositionTypes.TOP,
    showLabel = true,
  } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className={`${handleLabelPosition(labelPosition)} flex gap-1`}>
        {showLabel && label && (
          <label className="text-sm text-gray-500 shrink-0" for={id}>
            {label}
          </label>
        )}
        <HandleInputRender {...props} />
      </div>
    </div>
  );
}

export default CustomInput;
