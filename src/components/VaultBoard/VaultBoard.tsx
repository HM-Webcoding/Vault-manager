
import SearchFilter from "./SearchFilter";
import VaultCard from "./VaultCard";

export default function VaultBoard() {
    return(
        <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
            <SearchFilter/>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <VaultCard />
            </div>
        </div>
        </main>
    )
}