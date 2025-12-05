import type { ReactNode, ComponentType } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { CommonButton } from "./Globals/CommonButton/CommonButton";

interface ErrorBoundaryProps {
	children: ReactNode;
	fallbackComponent?: ComponentType<FallbackProps>;
}

export const AppErrorBoundary = ({
	children,
	fallbackComponent: FallbackComponent = ErrorFallback,
}: ErrorBoundaryProps) => {
	return (
		<ErrorBoundary FallbackComponent={FallbackComponent}>
			{children}
		</ErrorBoundary>
	);
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
			<p className="text-gray-700 mb-4">
				We encountered an unexpected error. Please try again.
			</p>
			{error && (
				<details className="mb-4">
					<summary className="cursor-pointer text-sm text-white">Error details</summary>
					<pre className="text-xs text-black bg-transparent p-2 mt-2 rounded overflow-auto">
						{error.message}
					</pre>
				</details>
			)}
			<CommonButton
				onClick={resetErrorBoundary}
				className="px-4 py-2 rounded hover:bg-blue-600"
			>
				Try Again
			</CommonButton>
		</div>
	);
};
