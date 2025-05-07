import React from "react";

const Button = ({
  text,
  type = "button",
  bgcolor = "bg-blue-600",
  className = "",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgcolor} ${textColor}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
