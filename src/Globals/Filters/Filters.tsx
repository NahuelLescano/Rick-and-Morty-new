import { useCharacterStore } from "@/store";

export const Filters = () => {
  const status = useCharacterStore((s) => s.filters.status);
  const gender = useCharacterStore((s) => s.filters.gender);
  const setFilters = useCharacterStore((s) => s.setFilters);
  const clearFilters = useCharacterStore((s) => s.clearFilters);

  return (
    <section className="flex flex-col md:flex-row gap-3 items-center">
      <select
        className="border p-2 rounded-md"
        value={status ?? ""}
        onChange={(e) => setFilters({ status: e.target.value || undefined })}
      >
        <option value="">Status (todos)</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="border p-2 rounded-md"
        value={gender ?? ""}
        onChange={(e) => setFilters({ gender: e.target.value || undefined })}
      >
        <option value="">Gender (todos)</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <button
        className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
        onClick={() => clearFilters()}
      >
        Limpiar filtros
      </button>
    </section>
  );
};
