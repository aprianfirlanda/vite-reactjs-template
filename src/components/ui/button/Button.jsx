import React from 'react';
import PropTypes from "prop-types";

const sizeClasses = {
  xs: "rounded-sm px-2 py-1 text-xs",
  sm: "rounded-sm px-2 py-1 text-sm",
  md: "rounded-md px-2.5 py-1.5 text-sm",
  lg: "rounded-md px-3 py-2 text-sm",
  xl: "rounded-md px-3.5 py-2.5 text-sm",
};

function Button({ children, size = "md" }) {
  return (
    <button
      className={`bg-indigo-600 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Button;
