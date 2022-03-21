import React from "react";
import "./SideMenu.scss";

interface SideMenuProps {
  content?: JSX.Element[] | JSX.Element;
  footer?: JSX.Element;
}

export const SideMenu = ({ content, footer }: SideMenuProps) => {
  return (
    <div className="side-menu">
      {content}
      {footer}
    </div>
  );
};
