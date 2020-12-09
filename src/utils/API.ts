import axios from "axios";
import { Book, Books } from "./Interfaces";

export const getBooks = () => {
  return axios.get<Books>("http://localhost:3000/books/"); // Ensures data received is Book[]
};

export const getBook = (id: string | undefined) => {
  return axios.get<Book>(`http://localhost:3000/books/${id}`);
};

export const addPost = (book: Book) => {
  // Post a book to json server
  // Specify headers object, the same for a post, delete, and put
  return axios.post("http://localhost:3000/book", book, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
