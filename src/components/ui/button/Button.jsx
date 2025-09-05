import React from 'react';
import PropTypes from "prop-types";

const sizeClasses = {
  xs: "rounded-sm px-2 py-1 text-xs",
  sm: "rounded-sm px-2 py-1 text-sm",
  md: "rounded-md px-2.5 py-1.5 text-sm",
  lg: "rounded-md px-3 py-2 text-sm",
  xl: "rounded-md px-3.5 py-2.5 text-sm",
};

const variantClasses = {
  normal:
    "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  outlined:
    "bg-white text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50",
  soft: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
};

function Button({ children, size = "md", variant = "normal" }) {
  return (
    <button
      className={`font-semibold shadow-xs ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["normal", "outlined", "soft"]),
};

export default Button;
