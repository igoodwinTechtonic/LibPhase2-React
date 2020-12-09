import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getBook } from "../utils/API";
import images from "../images/books/*.jpg";
import { Book, RouteParams } from "../utils/Interfaces";

// const BookDetailsPage: React.FC<{ id: number }> = ({ id }): JSX.Element => {      // Use this if taking in a prop
const BookDetailsPage: React.FC = (): JSX.Element => {
  // Get book from db.json based on id, returns a string
  const { id } = useParams<RouteParams>();

  // Grab images from folder
  const imageSrc: string[] = Object.values(images);

  // Use state to manage currently selected book
  const [book, setBook] = useState<Book>();

  // Grab book from API based on id in url
  useEffect(() => {
    getBook(id)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // console.log(book);

  return (
    <>
      {/* Only render if book exists */}
      {book ? (
        <section className="details-grid">
          <h2 className="book-details__title--detail">{book.title}</h2>

          <aside className="book-details__img--container">
            <img
              className="book-details__img--cover"
              src={`${imageSrc.filter((image: string) => image.replace(/\.\w+\./, ".") === book.image)}`}
              alt={book.title}
            />
            <aside className="rating rating--book-details">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </aside>
          </aside>

          <h3 className="book-details__author--details">{book.author}</h3>

          <section className="book-details__details--container">
            <p className="book-details__details">Published: {book.pubDate}</p>

            <p className="book-details__details">{book.pages} Pages</p>
          </section>

          {/* Render a number of <p> tags based on the number of lines in the book.description array */}
          <aside className="book-details__description--container">
            {book.description.map((paragraph) => (
              // TODO - Bad idea making each key the index of its place in the array, but what else do I use?
              <p key={book.description.indexOf(paragraph)} className="book-details__description">
                {paragraph}
              </p>
            ))}
          </aside>

          <section className="btn__grid">
            <Link to={`/edit/${id}`} className="btn--add-edit">
              <button className="btn">Edit Book</button>
            </Link>
            <Link to="/" className="btn--home">
              <button className="btn btn--back">Home</button>
            </Link>
          </section>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default BookDetailsPage;
