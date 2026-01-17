import type { ReactNode } from "react";

interface SimpleTextProps {
  children: ReactNode;
  className?: string;
}

export const SimpleText = ({ children, className }: SimpleTextProps) => {
  return <p className={`${className} text-lg mb-2`}>{children}</p>;
};
