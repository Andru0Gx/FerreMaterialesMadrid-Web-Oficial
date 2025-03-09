import { Search } from "lucide-react";

export function SearchBar() {
    return (
        <div className="rounded-xl overflow-hidden flex bg-section px-2 justify-end">
            <input
                type="text"
                className="w-full h-10 bg-transparent text-color-1 text-left focus:outline-none"
                placeholder="Buscar productos..."
            />
            <div className="h-10 w-8 flex items-center text-color-1">
                <Search size="18" />
            </div>
        </div>
    );
}
