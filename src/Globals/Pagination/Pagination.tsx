import { CommonButton } from "../CommonButton";
import { usePagination } from "@/hooks";

export const Pagination = () => {
  const { currentPage, totalPages, handleNext, handlePrev, loading } =
    usePagination();

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <CommonButton
        className="px-4 py-2 rounded disabled:opacity-50 disabled:bg-gray-600 disabled:cursor-not-allowed"
        onClick={handlePrev}
        disabled={loading || currentPage <= 1}
      >
        {loading ? "Cargando..." : "Prev"}
      </CommonButton>
      <span>
        Página {currentPage} de {totalPages ?? "..."}
      </span>
      <CommonButton
        className="px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading || (totalPages !== 0 && currentPage >= totalPages)}
        onClick={handleNext}
      >
        {loading ? "Cargando..." : "Next"}
      </CommonButton>
    </div>
  );
};
