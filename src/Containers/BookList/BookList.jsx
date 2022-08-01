import classes from "./BookList.module.scss";
import BookCard from "../../Components/BookCard/BookCard";

const BookList = ({ books }) => {
    return (
        <div className={classes.grid}>
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
};

export default BookList;
