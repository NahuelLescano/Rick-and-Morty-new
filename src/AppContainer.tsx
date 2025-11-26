import { App } from "./App";
import { AppErrorBoundary } from "./AppErrorBoundary";
import { AppRouter } from "./AppRouter";

export const AppContainer = () => {
	return (
		<App>
			<AppErrorBoundary>
				<AppRouter />
			</AppErrorBoundary>
		</App>
	);
};
