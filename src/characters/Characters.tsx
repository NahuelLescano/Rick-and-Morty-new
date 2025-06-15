import type { Character } from "@/types";
import { CharacterItem } from "./components/CharacterItem";

export const Characters = (
    { characters }: { characters: Character[] }
) => {

    return (
        <>
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
        </>
    );
}
