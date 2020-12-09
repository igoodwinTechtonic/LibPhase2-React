import React, { useContext, useEffect, useState } from "react";
import BookshelfCard from "../components/BookshelfCard";
import { BooksContext } from "../utils/BooksContext";
import { Book, Books } from "../utils/Interfaces";
import { getBooks } from "../utils/API";

const BookshelfPage: React.FC = (): JSX.Element | null => {
  // receive the books stored in the context state
  // const Books: Books = useContext(BooksContext);
  // console.log(Books);

  // Create state using interface of Books array
  const [books, updateBooks] = useState<Books>([]);

  // API call to json server on initial page load to store books on client side
  useEffect(() => {
    getBooks()
      .then(({ data }) => updateBooks(data)) // Update state from response.data
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* Uses a CSS class to show and hide this component based on screen size */}
      <form className="search-bookshelf" id="filterForm">
        <label className="search-bookshelf__label">Search Bookshelf</label>
        {/* This input filters books on the screen, different than the other search bar functionality */}
        <input className="search-bookshelf__input" id="filter-books" type="text" placeholder="Search by Title/Author" />
      </form>

      <h2 className="bookshelf-title">A Bookshelf of Fantasy Novels</h2>

      <ul className="library-grid">
        {/* JS code to render books from db.json with axios */}
        {books.map((book: Book) => (
          <BookshelfCard key={book.key} book={book} />
        ))}
      </ul>
    </>
  );
};

export default BookshelfPage;
