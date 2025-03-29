import React from "react";

const RenderButton = ({
  onClick,
  disabled,
  children,
  variant = "primary",
  size = "sm",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} rounded-0`}
      type="button"
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(RenderButton);
