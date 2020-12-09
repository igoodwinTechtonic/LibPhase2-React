import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Page from './components/Page';
import HomePage from "./pages/HomePage";
import BookshelfPage from "./pages/BookshelfPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import AddEditBookPage from "./pages/AddEditBookPage";
import PageNotFound from "./components/PageNotFound";

import { getBooks } from "./utils/API";
// import shortid from "shortid";
import { Books } from "./utils/Interfaces";
import { BooksContext } from "./utils/BooksContext";

// Main components in App, decides which page to render
const App = (): JSX.Element => {
  // // Create state using interface of Books array
  // const [books, updateBooks] = useState<Books>([]);

  // // API call to json server on initial page load to store books on client side
  // useEffect(() => {
  //   getBooks()
  //     .then(({ data }) => updateBooks(data)) // Update state from response.data
  //     .catch((error) => console.log(error));
  // }, []);

  // USE CONTEXT API TO PASS BOOKS[] TO CHILD COMPONENTS!

  // CONTAIN THE BOOKS CONTEXT IN A BooksContext.ts FILE

  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* IMPLEMENT A PROVIDER TO PASS STATE TO BOOKSHELF AND DETAILS AND EDIT */}
          {/* <BooksContext.Provider value={books}> */}
          <Route exact path="/bookshelf">
            <BookshelfPage />
          </Route>
          <Route path="/book/:id">
            <BookDetailsPage />
          </Route>
          <Route path={["/add", "/edit/:id"]}>
            <AddEditBookPage />
          </Route>
          {/* <Route path="/add">
              <AddPage />
            </Route>
            <Route path="/edit">
              <EditPage />
            </Route> */}
          {/* </BooksContext.Provider> */}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
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
