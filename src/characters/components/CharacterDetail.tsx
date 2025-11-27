import { useNavigate, useParams } from "react-router-dom";
import { useCharacterStore } from "@/store";
import { IoIosArrowBack } from "react-icons/io";

export const CharacterDetail = () => {
	const { id } = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

	const character = useCharacterStore((state) =>
		state.getCharacterById(parseInt(id!)),
	);
	if (!character) {
		return (
			<div className="min-h-screen flex items-center justify-center text-white">
				<h1 className="text-3xl font-bold">Character not found</h1>
			</div>
		);
	}

	return (
		<section className="flex justify-center align-center text-white p-8">
			<div className="max-w-4xl mt-12 mx-auto bg-transparent backdrop-blur-md rounded-lg shadow-lg p-6">
				<div className="relative">
					<img
						src={character.image}
						alt={`${character.name}'s image`}
						className="size-96 object-fill rounded-lg mb-4"
					/>
					<button
                        className="cursor-pointer hover:scale-110 transition-all"
                        onClick={handleBackClick}>
						<IoIosArrowBack
							size={35}
							className="absolute top-5 left-5 z-10 text-gray-500"
						/>
					</button>
				</div>
				<h1 className="text-3xl font-bold mb-4">{character.name}</h1>
				<p className="text-lg mb-2">
					<strong>Status:</strong> {character.status}
				</p>
				<p className="text-lg mb-2">
					<strong>Species:</strong> {character.species}
				</p>
				<p className="text-lg mb-2">
					<strong>Type:</strong> {character.type || "N/A"}
				</p>
				<p className="text-lg mb-2">
					<strong>Gender:</strong> {character.gender}
				</p>
				<p className="text-lg mb-2">
					<strong>Origin:</strong> {character.origin.name}
				</p>
				<p className="text-lg mb-2">
					<strong>Location:</strong> {character.location.name}
				</p>
			</div>
		</section>
	);
};
