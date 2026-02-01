import { useState } from "react"

export default function Form({ onSave }) {

    const initialState = {
        siteUrl: "",
        favouriteColor: "",
        category: "",
        userName: "",
        password: ""
    }

    const [newBookMark, setnewBookMark] = useState(initialState)

    const [errors, setErrors] = useState({})

    const valid = () => {
        const newErrors = {}
        if (!newBookMark.siteUrl) {
            newErrors.siteUrl = "website url required"
        } else try {
            new URL(newBookMark.siteUrl)
        } catch {
            newErrors.siteUrl = "provide the valid url"
        }

        if (!newBookMark.favouriteColor) {
            newErrors.favouriteColor = "color is required"
        }

        if (!newBookMark.category) {
            newErrors.category = "category is required"
        }
        if (!newBookMark.userName) {
            newErrors.userName = "username is required"
        }

        if (!newBookMark.password) {
            newErrors.password = "password is required"
        } else if (newBookMark.password.length < 6) {
            newErrors.password = "password must be in 6 character"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0

    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setnewBookMark({
            ...newBookMark,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!valid()) return
        if (typeof onSave !== "function") return
        onSave({
            ...newBookMark,
            id: crypto.randomUUID()
        })
        setnewBookMark(initialState)
        setErrors({})
    }

    const handleReset = () => {
        setnewBookMark(initialState)
        setErrors({})
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 px-4" >
            <form
                onSubmit={handleSubmit}
                className="mb-10 rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur" >
                <div className="mb-8 flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400" >
                        New bookmark
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Store website credentials safely
                    </h2>
                    <p className="text-sm text-neutral-400">
                        Fill the details below. Your brand color helps us render
                        a matching favicon.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <label
                            className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Website URL
                            </span>
                            <input
                                type="url"
                                placeholder="https://example.com"
                                name="siteUrl"
                                value={newBookMark.siteUrl}
                                onChange={handleChange}
                                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                            />
                            <span className="text-xs text-neutral-500"> Include https:// for best results. </span>
                            <p className="text-red-600">{errors?.siteUrl}</p>
                        </label>

                        <div
                            className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p
                                        className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                                    >
                                        Favicon color
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        Select the accent color we should
                                        render.
                                    </p>
                                </div>
                                <input
                                    type="color"
                                    name="favouriteColor"
                                    value={newBookMark.favouriteColor}
                                    onChange={handleChange}
                                    className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50" />
                            </div>
                            <div
                                className="mt-5 flex items-center gap-3 text-xs text-neutral-500" >
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400" >
                                    Hex
                                </span>
                                <span>Matches any brand primary color.</span>
                            </div>
                            <p className="text-red-600">{errors?.favouriteColor}</p>
                        </div>

                        <label
                            className={`flex flex-col gap-3 rounded-2xl border ${errors?.category ? 'border-red-500' : 'border-neutral-800'}bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Category
                            </span>
                            <select
                                name="category"
                                value={newBookMark.category}
                                onChange={handleChange}
                                className="w-full bg-transparent text-base text-white outline-none"
                            >
                                <option className="bg-neutral-900 text-white">
                                    Select category
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Social
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Video
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Design
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Streaming
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Productivity
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Entertainment
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Shopping
                                </option>
                                <option className="bg-neutral-900 text-white">
                                    Music
                                </option>
                            </select>
                            <span className="text-xs text-neutral-500">
                                Helps you filter quicker later.
                            </span>
                            <p className="text-red-600">{errors.category}</p>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <label
                            className={`flex flex-col gap-3 rounded-2xl border ${errors?.userName ? 'border-red-500' : 'border-neutral-800'} bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10`}>
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Username
                            </span>
                            <input
                                type="text"
                                placeholder="Enter username"
                                name="userName"
                                value={newBookMark.userName}
                                onChange={handleChange}
                                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                            />
                            <span className="text-xs text-neutral-500"> Use workspace or personal handle. </span>
                            <p className="text-red-600">{errors?.userName}</p>
                        </label>

                        <label
                            className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10"
                        >
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                            >
                                Password
                            </span>
                            <input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={newBookMark.password}
                                onChange={handleChange}
                                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                            />
                            <span className="text-xs text-neutral-500"
                            >Choose at least 6 characters.</span >
                            <p className="text-red-600">{errors?.password}</p>
                        </label>
                    </div>
                </div>

                <div
                    className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                >
                    <div className="text-xs text-neutral-500">
                        By submitting you confirm the entry is safe to store.
                    </div>
                    <div className="flex flex-1 justify-end gap-3">
                        <button
                            onClick={handleReset}
                            type="reset"
                            className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto">
                            Add Bookmark
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}