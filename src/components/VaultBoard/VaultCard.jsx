export default function VaultCard({bookMarks}) {
    return(
        <>
        {
            bookMarks.map((bookMark)=> (
                <article
                    key={bookMark.id}
                    style={{ "--favColor": bookMark.favouriteColor }}
                    className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-(--favColor) hover:shadow-blue-500/20">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                style={{color: bookMark.favouriteColor}}
                                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800`}
                                >
                                    Fb
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Facebook
                                    </h3>
                                    <p
                                        className="text-xs uppercase tracking-wide text-neutral-500"
                                    >
                                        {bookMark.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">
                            {new URL(bookMark.siteUrl).hostname.replace(/^www\./, "")}
                        </p>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    {bookMark.userName}
                                </dt>
                                <dd className="text-neutral-50">
                                   {bookMark.userName}
                                </dd>
                            </div>
                            <div
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                            >
                                <dt
                                    className="text-xs uppercase tracking-wide text-neutral-500"
                                >
                                    Password
                                </dt>
                                <dd
                                    className="flex items-center gap-2 text-neutral-50"
                                >
                                    <span>{bookMark.password}</span>
                                    <button
                                        className="text-xs font-semibold text-(--favColor)"
                                    >
                                        Reveal
                                    </button>
                                </dd>
                            </div>
                        </dl>
        </article>
            ))
        }
        
        </>
    )
}