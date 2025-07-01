import React from "react";

function CustomButton({ children, className, ...props }) {
  return (
    <button
      className={`${className} p-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer`}
      {...props}>
      {children}
    </button>
  );
}

export default CustomButton;
