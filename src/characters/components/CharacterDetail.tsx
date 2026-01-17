import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useCharacterStore } from "@/store";
import { Loading, CommonButton } from "@/Globals";

export const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  const fetchById = useCharacterStore((state) => state.fetchCharacterById);
  const characterById = useCharacterStore((state) =>
    state.selectCharacterById(Number(id)),
  );

  useEffect(() => {
    if (id) {
      fetchById(Number(id));
    }
  }, [id, fetchById]);

  if (!characterById) {
    return <Loading />;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const episodeNumbers = characterById.episode
    .split(", ")
    .map(ep => parseInt(ep))
    .sort((a, b) => a - b);

  const renderEpisodes = () => {
    if (episodeNumbers.length === 0) return "No episodes";

    if (showAllEpisodes) {
      return (
        <div className="max-h-40 overflow-y-auto">
          <div className="grid grid-cols-5 gap-2 mb-3">
            {episodeNumbers.map((ep, index) => (
              <span 
                key={index}
                className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm text-center font-medium"
              >
                {ep}
              </span>
            ))}
          </div>
          <button 
            onClick={() => setShowAllEpisodes(false)}
            className="text-blue-400 text-sm hover:underline"
          >
            Show less
          </button>
        </div>
      );
    }

    // Mostrar solo los primeros 10 en formato de vista previa
    const v = 10;
    const displayEpisodes = episodeNumbers.slice(0, v);
    const hasMore = episodeNumbers.length > v;

    return (
      <div>
        <div className="grid grid-cols-5 gap-2 mb-2">
          {displayEpisodes.map((ep, index) => (
            <span 
              key={index}
              className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm text-center font-medium"
            >
              {ep}
            </span>
          ))}
        </div>
        {hasMore && (
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-gray-400">
              ... and {episodeNumbers.length - 10} more episodes
            </span>
            <button 
              onClick={() => setShowAllEpisodes(true)}
              className="text-blue-400 text-sm hover:underline"
            >
              Show all ({episodeNumbers.length})
            </button>
          </div>
        )}
      </div>
    );
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
          <p className="text-lg mb-2">
            <strong>Status:</strong> {characterById.status}
          </p>
          <p className="text-lg mb-2">
            <strong>Species:</strong> {characterById.species}
          </p>
          <p className="text-lg mb-2">
            <strong>Type:</strong> {characterById.type}
          </p>
          <p className="text-lg mb-2">
            <strong>Gender:</strong> {characterById.gender}
          </p>
          <p className="text-lg mb-2">
            <strong>Origin:</strong> {characterById.origin.name}
          </p>
          <p className="text-lg mb-2">
            <strong>Location:</strong> {characterById.location.name}
          </p>
          <p className="text-lg mb-2">
            <strong>Episodes:</strong> 
          </p>
          <div className="mb-2">
            {renderEpisodes()}
          </div>
        </footer>
      </div>
    </section>
  );
};
