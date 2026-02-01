
import { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import VaultCard from "./VaultCard";
import Form from "./Form";
import { get } from "node:http";

export default function VaultBoard() {
 
    const storagekey = "bookmarks";
    const getbookmarks = () => {
       const data = localStorage.getItem(storagekey);
        return data ? JSON.parse(data) : [];
    }

    const [allBookmark, setAllBookmark] = useState(getbookmarks());
    const [bookMarks, setBookMarks] = useState(getbookmarks());
    

    const saveBookmarks = (bookmarks) => {
        localStorage.setItem(storagekey, JSON.stringify(bookmarks));
    }

    const handleNewBookmark = (newBookMark) => {
        let updatedBookmarks = [...allBookmark, newBookMark];
        setAllBookmark(updatedBookmarks);
        setBookMarks(updatedBookmarks);
        saveBookmarks(updatedBookmarks);
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