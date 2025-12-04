import { CharacterItem } from "./components";
import { useCharacterStore } from "@/store/CharacterStore";
import { useEffect } from "react";

export const Characters = () => {
  const characters = useCharacterStore((state) => state.allCharacters);
  const getPage = useCharacterStore((state) => state.getPage);
  const currentPage = useCharacterStore((state) => state.currentPage);
  const totalPages = useCharacterStore((state) => state.totalPages);
  const searchCharacter = useCharacterStore((state) => state.searchCharacter);

  useEffect(() => {
    if (characters.length === 0) {
      getPage(1);
    }
  }, [characters, getPage]);

  const handlePrev = () => {
    if (searchCharacter) return;
    if (currentPage > 1) getPage(currentPage - 1);
  };

  const handleNext = () => {
    if (searchCharacter) return;
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
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          disabled={searchCharacter ? true : currentPage <= 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <span>
          Página {currentPage} de {totalPages ?? "..."}
        </span>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          disabled={searchCharacter ? true : (totalPages !== 0 && currentPage >= totalPages)}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
