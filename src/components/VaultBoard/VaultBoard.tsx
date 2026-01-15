
import { useState } from "react";
import SearchFilter from "./SearchFilter";
import VaultCard from "./VaultCard";
import Form from "./Form";

export default function VaultBoard() {
    const defaultBookmark = {
        id: crypto.randomUUID(),
        siteUrl: "https://www.facebook.com",
        favouriteColor: "#5545ff",
        category: "social",
        userName: ".doe@email.com",
        password: "123456"
    }

    const [allBookmark, setAllBookmark] = useState([defaultBookmark])
    const [bookMarks, setBookMarks] = useState([defaultBookmark])

    const handleNewBookmark = (newBookMark) => {
        setAllBookmark([
            ...allBookmark,
            newBookMark
        ])
        setBookMarks([
            ...bookMarks,
            newBookMark
        ])
    }

    return(
        <main className="p-8">
            <Form onSave={handleNewBookmark} />
            <div className="max-w-7xl mx-auto space-y-10 px-4">
                <SearchFilter/>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <VaultCard bookMarks={bookMarks} />
                </div>
            </div>
        </main>
    )
}