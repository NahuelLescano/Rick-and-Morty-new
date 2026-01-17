import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useCharacterStore } from "@/store";
import { Loading, CommonButton, SimpleText, RenderEpisodes } from "@/Globals";

export const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchById = useCharacterStore((state) => state.fetchCharacterById);
  useEffect(() => {
    if (id) {
      fetchById(Number(id));
    }
  }, [id, fetchById]);

  const characterById = useCharacterStore((state) =>
    state.selectCharacterById(Number(id)),
  );
  if (!characterById) {
    return <Loading />;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="flex justify-center align-center text-white p-8">
      <div className="max-w-4xl mt-12 mx-auto bg-transparent backdrop-blur-md rounded-lg shadow-lg p-6">
        <div className="relative">
          <img
            src={characterById.image}
            alt={`${characterById.name}'s image`}
            className="size-96 object-fill rounded-lg mb-4"
          />
          <CommonButton
            onClick={handleBackClick}
            className="hover:opacity-50 transition-all"
          >
            <IoIosArrowBack
              size={35}
              className="absolute top-5 left-5 z-10 text-red-500"
            />
          </CommonButton>
        </div>
        <footer className="flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-4">{characterById.name}</h3>
          <SimpleText>
            <strong>Status:</strong> {characterById.status}
          </SimpleText>
          <SimpleText className="text-lg mb-2">
            <strong>Species:</strong> {characterById.species}
          </SimpleText>
          <SimpleText className="text-lg mb-2">
            <strong>Type:</strong> {characterById.type}
          </SimpleText>
          <SimpleText className="text-lg mb-2">
            <strong>Gender:</strong> {characterById.gender}
          </SimpleText>
          <SimpleText className="text-lg mb-2">
            <strong>Origin:</strong> {characterById.origin}
          </SimpleText>
          <SimpleText className="text-lg mb-2">
            <strong>Location:</strong> {characterById.location}
          </SimpleText>
          <SimpleText className="text-lg mb-2">
            <strong>Episodes:</strong>
          </SimpleText>
          <div className="mb-2">
            <RenderEpisodes characterById={characterById} />
          </div>
        </footer>
      </div>
    </section>
  );
};
