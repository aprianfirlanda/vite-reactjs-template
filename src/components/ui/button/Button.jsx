import React from 'react';
import PropTypes from 'prop-types';

const textClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-sm',
};

const radiusNormal = {
  xs: 'rounded-sm',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-md',
  xl: 'rounded-md',
};

const paddingByShape = {
  normal: {
    xs: 'px-2 py-1',
    sm: 'px-2 py-1',
    md: 'px-2.5 py-1.5',
    lg: 'px-3 py-2',
    xl: 'px-3.5 py-2.5',
  },
  rounded: {
    xs: 'px-2.5 py-1',
    sm: 'px-2.5 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-3.5 py-2',
    xl: 'px-4 py-2.5',
  },
  circular: {
    xs: 'p-1',
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
    xl: 'p-3',
  },
};

const variantClasses = {
  normal:
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  outlined: 'bg-white text-indigo-800 inset-ring inset-ring-indigo-300 hover:bg-indigo-50',
  soft: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
};

const iconSizes = {
  xs: 'size-3',
  sm: 'size-3',
  md: 'size-4',
  lg: 'size-4',
  xl: 'size-5',
};

// note -> shape(circular) only for the button that fills with icon only
function Button({ children, size = 'md', shape = 'normal', variant = 'normal' }) {
  const radius = shape === 'normal' ? radiusNormal[size] : 'rounded-full';
  const padding = paddingByShape[shape][size];
  const text = shape === 'circular' ? '' : textClasses[size];
  const iconSize = iconSizes[size];

  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: `${iconSize} ${child.props.className || ''}`,
      });
    }
    return child;
  });

  return (
    <button
      className={`inline-flex items-center justify-center gap-1 font-semibold shadow-xs transition ${radius} ${padding} ${text} ${variantClasses[variant]}`}
    >
      {processedChildren}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  shape: PropTypes.oneOf(['normal', 'rounded', 'circular']),
  variant: PropTypes.oneOf(['normal', 'outlined', 'soft']),
};

export default Button;
