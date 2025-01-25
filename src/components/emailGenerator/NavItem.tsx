import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <div className="gap-2 self-stretch p-2 whitespace-nowrap rounded-lg">
    {text}
  </div>
);
