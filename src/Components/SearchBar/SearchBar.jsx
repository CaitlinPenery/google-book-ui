import { useState } from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ initialValue = "", onSubmit }) => {
    // Update the value in searchbar
    const [internal, setInternal] = useState(initialValue);

    const handleChange = (e) => setInternal(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        // calling function from App.jsx to set search value
        onSubmit(internal);
    };
    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Google Books</h1>
            <p className={classes.desc}>Find your next obsession!</p>

            <form className={classes.bar} onSubmit={handleSubmit}>
                <input
                    className={classes.input}
                    value={internal}
                    onChange={handleChange}
                    placeholder="What book would you like to find..."
                />
                <button className={classes.btn}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
