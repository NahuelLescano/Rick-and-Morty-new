import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

export const RoutesNotFound = ({ children }: { children: ReactNode }) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={
                <h1 className="text-3xl text-center mt-20">
                    Page Not Found
                </h1>
            } />
        </Routes>
    );
};
