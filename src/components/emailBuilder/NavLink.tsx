import * as React from "react";
import { NavLinkProps } from "./types";

export const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <div
      className="gap-2 self-stretch p-2 whitespace-nowrap rounded-lg"
      tabIndex={0}
      role="button"
    >
      {label}
    </div>
  );
};
