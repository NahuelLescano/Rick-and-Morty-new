import { CharacterItem } from "./components/CharacterItem";
import { useCharacterStore } from "@/store/CharacterStore";
import { useEffect } from "react";

export const Characters = () => {
    const characters = useCharacterStore((state) => state.allCharacters);
    const setAllCharacters = useCharacterStore((state) => state.setAllCharacters);

    useEffect(() => {
        if (characters.length === 0) {
            setAllCharacters();
        }
    }, []);
    return (
        <main className="grid grid-cols-3 gap-4 z-2 max-w-7xl mx-auto m-0 mt-10 text-lg">
            {
                characters.map((char) => (
                    <CharacterItem
                        key={char.id}
                        id={char.id}
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
