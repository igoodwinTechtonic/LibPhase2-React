import * as React from "react";
import { Books } from "./Interfaces";

// Create a React context to handle reads/changes in the data in child components
// Initially holds an empty array of books
export const BooksContext = React.createContext<Books>([
  // id: string;
  // title: string;
  // author: string;
  // pubDate: string;
  // pages: number;
  // image: string;
  // rating: number;
  // description: string[];
]);
