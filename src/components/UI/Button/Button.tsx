import React, { ReactNode } from "react";
import "./button.scss";
type buttonType = {
  type?: "button" | "submit" | "reset" | undefined;
  className: string;
  disabled: boolean;
  children: ReactNode;
  onClick?: () => void; //TODO remove optional part
};
const Button = ({
  type,
  className,
  disabled,
  children,
  onClick,
}: buttonType) => {
  return (
    <button
      type={type || "button"}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
