import { title } from "process";
import React from "react";
// import images from '../images/books/*.jpg';

const BookshelfCard: React.FC = (): JSX.Element => {
  return (
    <li className="book__li">
      <button className="book__link" id="book--">
        <section className="book">
          <img className="book__img" src="" alt="Alt text Title" />
          <h3 className="book__title">Title</h3>
          <p className="book__author">Author</p>
        </section>
      </button>
    </li>
  );
};

export default BookshelfCard;
