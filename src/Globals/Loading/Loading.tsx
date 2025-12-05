export const Loading = () => {
	return (
		<div className="flex items-center justify-center mx-auto w-full h-full mt-40 py-10">
			<div className="flex flex-col items-center gap-3">
				<div
					className="w-10 h-10 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"
					aria-hidden="true"
				/>
				<span className="text-teal-400 text-sm font-medium">Loading...</span>
			</div>
		</div>
	);
};
