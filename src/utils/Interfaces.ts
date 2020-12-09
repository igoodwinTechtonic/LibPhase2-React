// Describe incoming data types from db.json
export interface Book {
  id: number;
  key: string;
  title: string;
  author: string;
  pubDate: string;
  pages: number;
  image: string;
  rating: number;
  description: string[];
}
// Define array of all books, used in BooksContext and App
export type Books = Array<Book>;

// Enable a route for opening book details and editing a book
export interface RouteParams {
  id?: string | undefined;
}

// export interface Books {
//   [index: number]: Book;
// }
