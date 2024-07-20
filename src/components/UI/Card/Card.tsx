import React, { ReactNode } from "react";
import "./card.scss";
type cardType = {
  className: string;
  children: ReactNode;
};
const Card = ({ className, children }: cardType) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
