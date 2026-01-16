import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LinksProps {
  to: string;
  className?: string;
  children: ReactNode;
}

export const Links = ({ to, className, children }: LinksProps) => {
  return (
    <NavLink to={to} className={`${className} hover:underline`}>
      {children}
    </NavLink>
  );
};
