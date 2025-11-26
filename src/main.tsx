import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "@/AppContainer";
import { AppErrorBoundary } from "@/AppErrorBoundary";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppErrorBoundary>
			<AppContainer />
		</AppErrorBoundary>
	</StrictMode>,
);
