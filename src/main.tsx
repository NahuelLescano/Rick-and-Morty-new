import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "@/AppContainer";
import { AppErrorBoundary } from "@/AppErrorBoundary";
import { getAxiosInstance } from "@/services";
import "./index.css";

getAxiosInstance();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppErrorBoundary>
            <AppContainer />
        </AppErrorBoundary>
    </StrictMode>,
);
