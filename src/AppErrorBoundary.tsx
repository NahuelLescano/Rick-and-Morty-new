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
      <section className="mb-6 p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="mb-4 text-white">We encountered an unexpected error.</p>
        {error && (
          <details className="mb-4 whitespace-pre-wrap bg-transparent backdrop-blur-md rounded-xl shadow-xl overflow-hidden text-pretty transition-all duration-300 hover:shadow-2xl border border-gray-700 p-4">
            <summary className="cursor-pointer text-sm text-white">
              Error details
            </summary>
            <pre className="p-2 mt-2 rounded overflow-auto font-semibold text-lg text-white">
              {error.message}
            </pre>
            <pre className="p-2 mt-2 rounded overflow-auto text-white">
              <h2 className="text-lg text-center font-bold">Stack trace:</h2>
              {error.stack}
            </pre>
          </details>
        )}
        <CommonButton
          onClick={resetErrorBoundary}
          className="px-4 py-2 rounded hover:bg-blue-600"
        >
          Try Again
        </CommonButton>
      </section>
    </div>
  );
};
