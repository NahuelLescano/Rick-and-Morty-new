import type { ReactNode } from "react";
import { NavBar } from "@/NavBar";
import { Footer } from "@/Footer";
import "./App.css";

export const App = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
