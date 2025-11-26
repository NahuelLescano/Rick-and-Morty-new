import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const AppErrorBoundary = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<>
			<ErrorBoundary FallbackComponent={() => <ErrorFallback />}>
				{children}
			</ErrorBoundary>
		</>
	);
};


const ErrorFallback = () => {
    return <div>Something went wrong.</div>;
}
