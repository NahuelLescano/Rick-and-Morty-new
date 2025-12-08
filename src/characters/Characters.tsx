import { CharacterItem } from "./components";
import { Pagination, Loading } from "@/Globals";
import { usePagination } from "@/hooks";

export const Characters = () => {
  const { characters, loading } = usePagination();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <header className="mt-22 z-3 gap-4">
        <Pagination />
      </header>
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
