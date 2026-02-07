import { FilterIcon, SearchIcon } from "../../icons/icons";

export default function SearchFilter({ onSearch , onselect}) {
    return (
        <section className="rounded-3xl border border-neutral-800 bg-linear-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <label className="relative flex-1">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                        <SearchIcon />
                    </span>
                    <input
                        onChange={(e) => onSearch(e.target.value)}
                        type="text"
                        placeholder="Search saved credentials"
                        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
                    />
                </label>

                <div className="flex flex-wrap gap-2">
                    <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
                        <FilterIcon />
                        <select
                            name="category"
                            placeholder="Sort by"
                            onChange={(e) => onselect(e.target.value)}
                        >

                            <option className="bg-neutral-900 text-white">
                                Assending
                            </option>
                            <option className="bg-neutral-900 text-white">
                                Dessending
                            </option>
                        </select>
                    </button>

                </div>
            </div>
        </section>
    )
}