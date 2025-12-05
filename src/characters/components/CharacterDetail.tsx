import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useCharacterStore } from "@/store";
import { Loading, CommonButton } from "@/Globals";

export const CharacterDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const fetchById = useCharacterStore((state) => state.fetchCharacterById);
	const character = useCharacterStore((state) =>
		state.selectCharacterById(Number(id)),
	);

	useEffect(() => {
		if (id) {
			fetchById(Number(id));
		}
	}, [id, fetchById]);

	if (!character) {
		return <Loading />;
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
					<CommonButton
						onClick={() => navigate(-1)}
						className="hover:opacity-50 transition-all"
					>
						<IoIosArrowBack
							size={35}
							className="absolute top-5 left-5 z-10 text-gray-500"
						/>
					</CommonButton>
				</div>
				<footer className="flex flex-col items-center justify-center text-center">
					<h3 className="text-3xl font-bold mb-4">{character.name}</h3>
					<p className="text-lg mb-2">
						<strong>Status:</strong> {character.status}
					</p>
					<p className="text-lg mb-2">
						<strong>Species:</strong> {character.species}
					</p>
					<p className="text-lg mb-2">
						<strong>Type:</strong> {character.type}
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
				</footer>
			</div>
		</section>
	);
};
