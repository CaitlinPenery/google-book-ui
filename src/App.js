import BookList from "./Containers/BookList/BookList";
import SearchBar from "./Components/SearchBar";
import classes from "./App.module.scss";
import { useState, useEffect } from "react";

const App = () => {
    const [search, setSearch] = useState("");
    const [books, setBook] = useState([]);

    const getBook = async (newSearchBook) => {
        const url = "https://www.googleapis.com/books/v1/volumes?q=";
        const response = await fetch(
            `${url}${newSearchBook}${"&maxResults=16"}`
        );
        const bookdata = await response.json();
        setBook(bookdata.items);
    };
    const handleSubmit = (search) => {
        setSearch(search);
    };
    useEffect(() => {
        if (search !== "" || undefined) {
            getBook(search);
        }
    }, [search]);
    return (
        <div className={classes.App}>
            <SearchBar onSubmit={handleSubmit} setSearch={setSearch} />
            <BookList books={books} />
        </div>
    );
};

export default App;
