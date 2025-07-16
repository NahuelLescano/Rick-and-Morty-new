import { useParams } from "react-router-dom";
import { useCharacterStore } from "@/store/CharacterStore";

export const CharacterDetail = () => {
    const params = useParams();
    const id: number | null = params.id ? parseInt(params.id) : null;
    
    if (id === null || isNaN(id)) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1 className="text-3xl font-bold">Character not found</h1>
            </div>
        );
    }

    const character = useCharacterStore((state) => state.getCharacterById(id));

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1 className="text-3xl font-bold">Character not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent backdrop-blur-md text-white p-8">
            <div className="max-w-4xl mt-12 mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <img
                    src={character.image}
                    alt={`${character.name}'s image`}
                    className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
                <p className="text-lg mb-2"><strong>Status:</strong> {character.status}</p>
                <p className="text-lg mb-2"><strong>Species:</strong> {character.species}</p>
                <p className="text-lg mb-2"><strong>Type:</strong> {character.type || "N/A"}</p>
                <p className="text-lg mb-2"><strong>Gender:</strong> {character.gender}</p>
                <p className="text-lg mb-2"><strong>Origin:</strong> {character.origin.name}</p>
                <p className="text-lg mb-2"><strong>Location:</strong> {character.location.name}</p>
            </div>
        </div>
    );
}
