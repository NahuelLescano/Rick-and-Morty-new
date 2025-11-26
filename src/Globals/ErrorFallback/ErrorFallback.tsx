type ErrorType = Error | null;

interface ErrorProps {
	error: ErrorType;
	resetErrorBoundary: () => void;
	level: levelType;
}

export const ErrorFallback = ({
	level,
	resetErrorBoundary,
	error,
}: ErrorProps) => {
	const { title, subtitle, showDetails } = getErrorMessage(level);

	return (
		<div className="flex flex-col items-center justify-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
			<div className="text-center">
				<h2 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-2">
					{title}
				</h2>
				<p className="text-red-600 dark:text-red-400 mb-4">{subtitle}</p>

				<div className="flex gap-3 justify-center">
					<button
						onClick={resetErrorBoundary}
						className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
					>
						Intentar de nuevo
					</button>

					{level === "app" && (
						<button
							onClick={() => window.location.reload()}
							className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
						>
							Recargar página
						</button>
					)}
				</div>

				{showDetails && (
					<details className="mt-4 text-left">
						<summary className="cursor-pointer text-red-600 dark:text-red-400">
							Detalles del error
						</summary>
						<pre className="mt-2 p-2 bg-red-100 dark:bg-red-900/40 rounded text-sm overflow-auto">
							{error?.message}
						</pre>
					</details>
				)}
			</div>
		</div>
	);
};

type levelType = "app" | "page" | "routing" | "unknown";

interface ErrorLevel {
	app: {
		title: string;
		subtitle: string;
		showDetails: boolean;
	};
	page: {
		title: string;
		subtitle: string;
		showDetails: boolean;
	};
	routing: {
		title: string;
		subtitle: string;
		showDetails: boolean;
	};
	unknown: {
		title: string;
		subtitle: string;
		showDetails: boolean;
	};
}

const errorLevels: ErrorLevel = {
	app: {
		title: "Error crítico en la aplicación",
		subtitle: "Ocurrió un error inesperado. Por favor, recarga la página.",
		showDetails: true,
	},
	page: {
		title: "Error en la página",
		subtitle: "Ha ocurrido un error en esta sección.",
		showDetails: false,
	},
	routing: {
		title: "Error de navegación",
		subtitle: "No se pudo cargar la página solicitada.",
		showDetails: false,
	},
	unknown: {
		title: "Algo salió mal",
		subtitle: "Ha ocurrido un error inesperado.",
		showDetails: false,
	},
} as const;

const getErrorMessage = (level: levelType) => {
	switch (level) {
		case "app":
			return errorLevels.app;
		case "page":
			return errorLevels.page;
		case "routing":
			return errorLevels.routing;
		default:
			return errorLevels.unknown;
	}
};
