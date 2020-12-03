import React, { useContext } from "react";
import BookshelfCard from "./BookshelfCard";
import { BooksContext } from "../utils/BooksContext";

const BookshelfPage: React.FC = (): JSX.Element | null => {
  // receive the books stored in the context state
  const Books = useContext(BooksContext);
  console.log(Books);

  return (
    <>
      <form className="search-bookshelf" id="filterForm">
        <label className="search-bookshelf__label">Search Bookshelf</label>
        {/* This input filters books on the screen, different than the other search bar functionality */}
        <input
          className="search-bookshelf__input"
          id="filter-books"
          type="text"
          placeholder="Search by Title/Author"
        />
      </form>

      <h2 className="bookshelf-title">A Bookshelf of Fantasy Novels</h2>

      <ul className="library-grid">
        {/* JS code to render books from db.json with axios */}
        {Books.map((Book) => {
          <BookshelfCard />;
        })}
      </ul>
    </>
  );
};

export default BookshelfPage;
