import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getBook } from "../utils/API";
import images from "../images/books/*.jpg";
import { Book, RouteParams } from "../utils/Interfaces";
import BookDetailsPage from "./BookDetailsPage";

const AddEditBookPage: React.FC = (): JSX.Element => {
  // If an id is supplied, get data and put into fields
  // If NO id is supplied, form is blank
  const { id } = useParams<RouteParams>();

  // Grab images from folder
  const imageSrc: string[] = Object.values(images);

  // Use state to manage currently selected book
  const [book, setBook] = useState<Book>();

  // Redirect to another location using JS
  const history = useHistory();
  // Used to tap into the title and post html elements
  const titleInputRef = useRef();
  const postInputRef = useRef();

  // Grab book from API based on id in url
  useEffect(() => {
    if (id) {
      getBook(id)
        .then((res) => {
          setBook(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      // Sets book to undefined if user navigates to Add Book page
      setBook(undefined);
    }
  }, [id]);

  console.log(book);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const title =
  };

  return (
    <>
      <section className="edit-grid">
        <div></div>

        <h2 className="book-details__title--add">{book ? "Edit Book" : "Add Book"}</h2>

        <form className="form-grid" id="new-book" onSubmit={handleFormSubmit}>
          <label className="form-grid__label" htmlFor="book-title">
            Title
          </label>
          <input
            className="form-grid__input"
            type="text"
            id="title"
            name="title"
            // ref={titleInputRef}
            defaultValue={book ? book.title : ""}
            placeholder="Title"
          />

          <label className="form-grid__label" htmlFor="book-author">
            Author
          </label>
          <input
            className="form-grid__input"
            type="text"
            id="author"
            name="author"
            defaultValue={book ? book.author : ""}
            placeholder="Author"
          />

          <label className="form-grid__img--placeholder">
            <img
              className="form-grid__img"
              src={book ? `${imageSrc.filter((image: string) => image.replace(/\.\w+\./, ".") === book.image)}` : ""}
              alt={book ? `Cover image for ${book.title}` : "Insert cover image"}
            />
          </label>
          <button className="btn btn--add-image">{book ? "Edit Image" : "Add Image"}</button>

          <label className="form-grid__label" htmlFor="book-synopsis">
            Synopsis
          </label>
          <textarea
            className="form-grid__input form-grid__input--synopsis"
            itemType="text"
            id="description"
            name="description"
            defaultValue={book ? book.description.join(" ") : ""}
            placeholder="A brief description of the book."
          ></textarea>

          <div className="form-grid__container form-grid__container--published">
            <label className="form-grid__label" htmlFor="book-date">
              Published
            </label>
            <input
              className="form-grid__input form-grid__input--published"
              type="date"
              id="pubDate"
              name="pubDate"
              defaultValue={book ? "2000-12-12" : "1900-01-01"}
            />
          </div>
          <div className="form-grid__container form-grid__container--pages">
            <label className="form-grid__label" htmlFor="book-pages">
              Pages
            </label>
            <input
              className="form-grid__input form-grid__input--pages"
              type="number"
              id="book-pages"
              name="book-date"
              min="0"
              max="10000"
              step="1"
              defaultValue={book ? book.pages : ""}
            />
          </div>

          <div className="rating__form-grid">
            <label className="rating__text rating__form-grid--text" htmlFor="ratings">
              Rating
            </label>
            <input
              className="rating__slider rating__form-grid--slider"
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="5"
              defaultValue={book ? book.rating : ""}
            />

            <aside className="rating rating--stars">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </aside>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddEditBookPage;

// Format date stored in db to a format the form can work with
/*
let date: string;
const formatDate = (pubDate: string): string => {
  let dateArray = pubDate.replace(",", "").split(" ");
  let month: string = "0";
  switch (dateArray[0]) {
    case "January":
      month = "1";
      break;
    case "February":
      month = "2";
      break;
    case "March":
      month = "3";
      break;
    case "April":
      month = "4";
      break;
    case "May":
      month = "5";
      break;
    case "June":
      month = "6";
      break;
    case "July":
      month = "7";
      break;
    case "August":
      month = "8";
      break;
    case "September":
      month = "9";
      break;
    case "October":
      month = "10";
      break;
    case "November":
      month = "11";
      break;
    case "December":
      month = "12";
      break;
    default:
      month = "1";
      break;
  }

  return `${dateArray[2]}-${month}-${dateArray[1]}`;
};
*/
/*
      January: '1',
    February: '2',
    March: '3',
    April: '4',
    May:  '5',
    June: '6',
    July: '7',
    August: '8',
    September: '9',
    October: '10',
    November: '11',
    December: '12',

      January: 'January',
    February: 'February',
    March: 'March',
    April: 'April',
    May:  'May',
    June: 'June',
    July: 'July',
    August: 'August',
    September: 'September',
    October: 'October',
    November: 'November',
    December: 'December',
*/
