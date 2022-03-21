import React from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  stat: { name: string; value: number };
}

export const ProgressBar = ({ stat }: ProgressBarProps) => {
  return (
    <div className="progress-bar-container">
      <p>{stat.name.toUpperCase()}</p>
      <div className={`progress-bar w-${stat.value}`} />
    </div>
  );
};
