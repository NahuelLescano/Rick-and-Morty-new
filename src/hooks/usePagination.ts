import { useEffect } from "react";
import { useCharacterStore } from "@/store";
import type { Character } from "@/types";

interface ResultPagination {
  handleNext: () => void;
  handlePrev: () => void;
  currentPage: number;
  totalPages: number;
  characters: Character[];
  loading: boolean;
}
/**
 * Custom hook to manage pagination for character data.
 * Provides functions to navigate to the previous and next pages,
 * as well as the current page and total pages.
 *
 * @returns {ResultPagination} An object containing:
 *  - handleNext: Function to navigate to the next page.
 *  - handlePrev: Function to navigate to the previous page.
 *  - currentPage: The current page number.
 *  - totalPages: The total number of pages available.
 *  - characters: The list of characters for the current page.
 *  - loading: Boolean indicating if data is being loaded.
 */
export const usePagination = (): ResultPagination => {
  const getPage = useCharacterStore((state) => state.getPage);
  const currentPage = useCharacterStore((state) => state.currentPage);
  const totalPages = useCharacterStore((state) => state.totalPages);
  const characters = useCharacterStore((state) => state.allCharacters);
  const loading = useCharacterStore((state) => state.loading);

  useEffect(() => {
    if (characters.length === 0 && currentPage === 1 && totalPages === 0) {
      getPage(1);
    }
  }, [characters, currentPage, totalPages, getPage]);

  const handlePrev = () => {
    if (currentPage > 1) getPage(currentPage - 1);
  };

  const handleNext = () => {
    if (totalPages !== 0 && currentPage < totalPages) getPage(currentPage + 1);
  };

  return { handleNext, handlePrev, currentPage, totalPages, characters, loading };
};
