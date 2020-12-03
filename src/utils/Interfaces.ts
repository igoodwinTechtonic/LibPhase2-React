// Describe incoming data types from db.json
export interface Book {
  id: string;
  title: string;
  author: string;
  pubDate: string;
  pages: number;
  image: string;
  rating: number;
  description: string[];
}
// Define array of books, used in BooksContext and App
export interface Books {
  [index: number]: Book;
}
