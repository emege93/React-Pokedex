import React, { MouseEventHandler } from "react";
import "./StepButton.scss";

interface StepButtonProps {
  title?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "primary-button" | "secondary-button";
}

export const StepButton = ({
  title,
  onClick,
  type = "primary-button",
}: StepButtonProps) => {
  return (
    <button className={`step-button ${type}`} onClick={onClick}>
      {title}
    </button>
  );
};
