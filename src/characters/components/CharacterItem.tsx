import type { Character } from "@/types.d";

export const CharacterItem = (
    { name, status, species, image }: Pick<Character, "name" | "status" | "species" | "image">
) => {

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'alive': return 'bg-green-500';
            case 'dead': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="mt-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-700">
            <div className="relative">
                <img 
                    src={image}
                    alt={`${name}'s image`}
                    className="w-full h-66 object-cover"
                />
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(status)}`}>
                    {status}
                </div>
            </div>
            
            <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2 truncate">{name}</h2>
                <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                        <span className="text-sm font-medium text-gray-400 w-16">Species:</span>
                        <span className="text-sm">{species}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

