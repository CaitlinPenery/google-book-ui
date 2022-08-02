import classes from "./BookList.module.scss";
import BookCard from "../../Components/BookCard/BookCard";
// Rendering Cards using map iteration
const BookList = ({ books, search }) => {
    if (!books) {
        return (
            <div className={classes.noBooks}>
                <p>No books with the title "{search}" could be found.</p>
            </div>
        );
    }
    return (
        <div className={classes.grid}>
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
};

export default BookList;
