import BookList from "./Containers/BookList/BookList";
import SearchBar from "./Components/SearchBar";
import classes from "./App.module.scss";
import { useState, useEffect } from "react";

const App = () => {
    // Declaring state variables
    const [search, setSearch] = useState("");
    const [books, setBook] = useState([]);
    // Fetching from API
    const getBook = async (newSearchBook) => {
        const url = "https://www.googleapis.com/books/v1/volumes?q=";
        const response = await fetch(
            `${url}${newSearchBook}${"&maxResults=16"}`
        );
        const bookdata = await response.json();
        setBook(bookdata.items);
    };
    // assigns search when function called
    const handleSubmit = (search) => {
        setSearch(search);
    };
    // Conditional on search having a value
    useEffect(() => {
        if (search !== "" || undefined) {
            getBook(search);
        }
    }, [search]);
    return (
        <div className={classes.App}>
            {/* Sending to children */}
            <SearchBar onSubmit={handleSubmit} setSearch={setSearch} />
            <BookList books={books} search={search} />
        </div>
    );
};

export default App;
