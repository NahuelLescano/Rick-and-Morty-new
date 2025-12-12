import { CharacterItem } from "./components";
import { Pagination, Loading } from "@/Globals";
import { usePagination } from "@/hooks";

export const Characters = () => {
  const { characters, loading } = usePagination();

  if (loading) {
    return <Loading />;
  }

  if (!loading && characters.length === 0) {
    return (
      <div className="max-w-7xl mx-auto mt-10 text-center">
        <p className="text-white text-lg">No se encontraron personajes.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-12">
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
      <Pagination />
    </div>
  );
};
