import type { ReactNode } from "react";
import { Footer } from "@/Globals";
import "./App.css";

export const App = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
