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

const colorClasses = {
  primary: {
    normal:
      'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600',
    outlined: 'bg-white text-primary-800 inset-ring inset-ring-primary-300 hover:bg-primary-50',
    soft: 'bg-primary-50 text-primary-600 hover:bg-primary-100',
  },
  secondary: {
    normal:
      'bg-secondary-600 text-white hover:bg-secondary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600',
    outlined:
      'bg-white text-secondary-800 inset-ring inset-ring-secondary-300 hover:bg-secondary-50',
    soft: 'bg-secondary-50 text-secondary-600 hover:bg-secondary-100',
  },
  accent: {
    normal:
      'bg-accent-600 text-white hover:bg-accent-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600',
    outlined: 'bg-white text-accent-800 inset-ring inset-ring-accent-300 hover:bg-accent-50',
    soft: 'bg-accent-50 text-accent-600 hover:bg-accent-100',
  },
  neutral: {
    normal:
      'bg-neutral-600 text-white hover:bg-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600',
    outlined: 'bg-white text-neutral-800 inset-ring inset-ring-neutral-300 hover:bg-neutral-50',
    soft: 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100',
  },
  info: {
    normal:
      'bg-info-600 text-white hover:bg-info-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info-600',
    outlined: 'bg-white text-info-800 inset-ring inset-ring-info-300 hover:bg-info-50',
    soft: 'bg-info-50 text-info-600 hover:bg-info-100',
  },
  success: {
    normal:
      'bg-success-600 text-white hover:bg-success-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success-600',
    outlined: 'bg-white text-success-800 inset-ring inset-ring-success-300 hover:bg-success-50',
    soft: 'bg-success-50 text-success-600 hover:bg-success-100',
  },
  warning: {
    normal:
      'bg-warning-600 text-white hover:bg-warning-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning-600',
    outlined: 'bg-white text-warning-800 inset-ring inset-ring-warning-300 hover:bg-warning-50',
    soft: 'bg-warning-50 text-warning-600 hover:bg-warning-100',
  },
  error: {
    normal:
      'bg-error-600 text-white hover:bg-error-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error-600',
    outlined: 'bg-white text-error-800 inset-ring inset-ring-error-300 hover:bg-error-50',
    soft: 'bg-error-50 text-error-600 hover:bg-error-100',
  },
};

const iconSizes = {
  xs: 'size-3',
  sm: 'size-3',
  md: 'size-4',
  lg: 'size-4',
  xl: 'size-5',
};

// @TODO: add props isLoading, onClick
function Button({
  children,
  type = 'button',
  size = 'md',
  shape = 'normal',
  variant = 'normal',
  color = 'primary',
  onClick,
  disabled = false,
}) {
  const radius = shape === 'normal' ? radiusNormal[size] : 'rounded-full';
  const padding = paddingByShape[shape][size];
  const text = shape === 'circular' ? '' : textClasses[size];
  const iconSize = iconSizes[size];
  const variantClass = colorClasses[color]?.[variant] || colorClasses.primary[variant];

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
      type={type}
      className={`inline-flex items-center justify-center gap-1 font-semibold shadow-xs transition ${radius} ${padding} ${text} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {processedChildren}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  shape: PropTypes.oneOf(['normal', 'rounded', 'circular']),
  variant: PropTypes.oneOf(['normal', 'outlined', 'soft']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'neutral',
    'info',
    'success',
    'warning',
    'error',
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
