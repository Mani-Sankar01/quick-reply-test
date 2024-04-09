import React from "react";

const Button = ({ onClick, disabled, className, children }) => {
  return (
    <button
      className={`w-full py-2 rounded-md ${className} ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
