import * as React from 'react';

const Search = () => {
  // Apply search-bookshelf styling when on mobile Bookshelf page
  return (
    <>
      <form className="search__form">
        <input className="search__input" type="text" id="search" name="search" placeholder="Search by Title/Author" />
        <button className="search__button">Search</button>
      </form>
    </>
  )
}

export default Search;
