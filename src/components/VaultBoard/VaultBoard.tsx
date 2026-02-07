
import { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import VaultCard from "./VaultCard";
import Form from "./Form";

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

    const handleNewBookmark = (newBookMark = {}) => {
        let updatedBookmarks = [...allBookmark, newBookMark];
        setAllBookmark(updatedBookmarks);
        setBookMarks(updatedBookmarks);
        saveBookmarks(updatedBookmarks);
    }

    const handleSearch = (searchTerm) => {
        const query = searchTerm.trim().toLowerCase();
       if(!query){ 
            setBookMarks(allBookmark);
       }else{
            const filteredBookmarks = allBookmark.filter((bookmark)=> {
                return bookmark.category?.toLowerCase().includes(query)
            })
            setBookMarks(filteredBookmarks);
        }
    }

    const handleSelect = (selectedOption) => {
        let sortedBookmarks = [...bookMarks];
        if(selectedOption === "Assending"){
            sortedBookmarks.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
        }else if(selectedOption === "Dessending"){
            sortedBookmarks.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        }   
        setBookMarks(sortedBookmarks);
    }

    return(
        <main className="p-8">
            <Form onSave={handleNewBookmark} />
            <div className="max-w-7xl mx-auto space-y-10 px-4">
                <SearchFilter onSearch={handleSearch} onselect={handleSelect}/>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <VaultCard bookMarks={bookMarks} />
                </div>
            </div>
        </main>
    )
    
}