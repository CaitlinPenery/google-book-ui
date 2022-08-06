import classes from "./BookCard.module.scss";

// assigning fetched data with checks

const BookCard = ({ book }) => {
    const image =
        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            ? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
    const title = book.volumeInfo.title ? book.volumeInfo.title : "No Title";
    const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown Author";
    let description = book.volumeInfo.description
        ? book.volumeInfo.description
        : "No description";
    const shortDesc = description.split(" ").splice(0, 20).join(" ");

    return (
        <div className={classes.card}>
            <img src={image} alt="bookImage" />
            <h3>{title}</h3>
            <p>{authors}</p>
            <p>{`${shortDesc}...`}</p>
        </div>
    );
};
export default BookCard;
