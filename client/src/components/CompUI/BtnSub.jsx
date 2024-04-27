import React from "react";
import { Button as BootButton } from "react-bootstrap";

const BtnSub = ({ children, className, color, fullWidth, type }) => {
  return (
    <BootButton
      size="lg"
      color={color}
      variant="primary"
      className={className}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </BootButton>
  );
};

export default BtnSub;
