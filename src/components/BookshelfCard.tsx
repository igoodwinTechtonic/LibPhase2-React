import React from "react";
import { Book } from "../utils/Interfaces";
import { Link } from "react-router-dom";
import images from "../images/books/*.jpg";

const BookshelfCard: React.FC<{ book: Book }> = ({ book }): JSX.Element | null => {
  // Grab images from folder
  const imageSrc: string[] = Object.values(images);
  // console.log(`Test ${Object.values(images)}`);
  // console.log(imageSrc);
  // console.log(imageSrc[0].replace(/\.\w+\./, "."));

  return (
    <li className="book__li" id={`book--${book.id}`}>
      <Link to={`/book/${book.id}`} className="book__link">
        <img
          className="book__img"
          src={`${imageSrc.filter((image: string) => image.replace(/\.\w+\./, ".") === book.image)}`}
          alt={book.title}
        />
        <h3 className="book__title">{book.title}</h3>
        <p className="book__author">{book.author}</p>
      </Link>
    </li>
  );
};

export default BookshelfCard;
