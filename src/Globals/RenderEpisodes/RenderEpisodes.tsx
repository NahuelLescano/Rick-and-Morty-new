import type { Character } from "@/types";
import { useState } from "react";

interface RenderEpisodesProps {
  characterById: Character;
}

export const RenderEpisodes = ({ characterById }: RenderEpisodesProps) => {
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);
  const episodeNumbers = characterById.episode
    .split(", ")
    .map((ep) => parseInt(ep))
    .sort((a, b) => a - b);

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
