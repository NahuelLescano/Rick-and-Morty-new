import type { Character } from "@/types";
import { CharacterItem } from "./components/CharacterItem";

export const Characters = (
    { characters }: { characters: Character[] }
) => {
    return (
        <main className="grid grid-cols-3 gap-4 z-2 max-w-7xl mx-auto m-0 mt-10 text-lg">
            {
                characters.map((char) => (
                    <CharacterItem
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        image={char.image}
                    />
                ))
            }
        </main>
    );
}
