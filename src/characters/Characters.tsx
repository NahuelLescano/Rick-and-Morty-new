import { useEffect } from "react";
import { CharacterItem } from "./components";
import { CommonButton } from "@/Globals/CommonButton";
import { useCharacterStore } from "@/store/CharacterStore";

export const Characters = () => {
	const characters = useCharacterStore((state) => state.allCharacters);
	const getPage = useCharacterStore((state) => state.getPage);
	const currentPage = useCharacterStore((state) => state.currentPage);
	const totalPages = useCharacterStore((state) => state.totalPages);
	const loading = useCharacterStore((state) => state.loading);

	useEffect(() => {
		if (characters.length === 0) {
			getPage(1);
		}
	}, [characters, getPage]);

	const handlePrev = () => {
		if (currentPage > 1) getPage(currentPage - 1);
	};

	const handleNext = () => {
		if (totalPages !== 0 && currentPage < totalPages) getPage(currentPage + 1);
	};

	return (
		<div className="max-w-7xl mx-auto mt-10">
			<main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-2 text-lg">
				{characters.map((char) => (
					<CharacterItem
						key={char.id}
						id={char.id}
						name={char.name}
						status={char.status}
						species={char.species}
						image={char.image}
					/>
				))}
			</main>

			<div className="flex items-center justify-center gap-4 mt-8">
				<CommonButton
					className="px-4 py-2 bg-gray-700 disabled:opacity-50"
					onClick={handlePrev}
					disabled={loading || currentPage <= 1}
				>
					{loading ? "Cargando..." : "Prev"}
				</CommonButton>
				<span>
					Página {currentPage} de {totalPages ?? "..."}
				</span>
				<CommonButton
					className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
					disabled={loading || (totalPages !== 0 && currentPage >= totalPages)}
					onClick={handleNext}
				>
					{loading ? "Cargando..." : "Next"}
				</CommonButton>
			</div>
		</div>
	);
};
