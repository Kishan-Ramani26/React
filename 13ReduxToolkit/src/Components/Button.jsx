import React from "react";

const Button = ({
  children,
  text,
  type = "button",
  bgcolor = "bg-blue-600",
  className = "",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 mx-5 rounded-lg cursor-pointer ${bgcolor} ${textColor} ${className}`}
      {...props}
    >
      {children ?? text}
    </button>
  );
};

export default Button;
