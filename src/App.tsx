import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Page from './components/Page';
import HomePage from "./components/HomePage";
import BookshelfPage from "./components/BookshelfPage";
import PageNotFound from "./components/PageNotFound";

import axios from "axios";
// import shortid from "shortid";
import { Books } from "./utils/Interfaces";
import { BooksContext } from "./utils/BooksContext";

// Main components in App, decides which page to render
const App = (): JSX.Element => {
  // Create state using interface of Books array
  const [books, updateBooks] = useState<Books>([]);

  // API call to json server on initial page load to store books on client side
  useEffect(() => {
    axios
      .get<Books>("http://localhost:3000/books/") // Ensures data received is Book[]
      .then(({ data }) => {
        updateBooks(data); // Update state from response.data
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // USE CONTEXT API TO PASS BOOKS[] TO CHILD COMPONENTS!

  // CONTAIN THE BOOKS CONTEXT IN A BooksContext.ts FILE

  return (
    <div id="wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* IMPLEMENT A PROVIDER TO PASS STATE TO BOOKSHELF AND DETAILS AND EDIT */}
        <BooksContext.Provider value={books}>
          <Route path="/bookshelf" component={BookshelfPage} />
          {/* <Route path="/bookshelf/:slug" component={DetailsPage} /> */}
          {/* The :slug is received as props.match.params.slug */}
        </BooksContext.Provider>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );

  /* conditionally rendering bookshelf based on data from api call
        {books ? (
          <BooksContext.Provider value={books}>
            <Route path="/bookshelf" component={BookshelfPage} />
            </BooksContext.Provider>
            ) : (
              // Render a spinner if waiting on bookshelf to generate
              <div style={{ marginTop: "100px", width: "50%" }}>
                <i className="fa fa-spinner fa-spin fa-3x" />
              </div>
            )}
*/

  // const route: string = window.location.pathname;
  // return (
  //   <div id="wrapper">
  //     <Header />
  //       {(route === '/bookshelf'
  //         ? <BookshelfPage />
  //         : <HomePage />
  //       )}
  //     <Footer />
  //   </div>
  // )
};

export default App;
