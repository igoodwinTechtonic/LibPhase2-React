import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = (): JSX.Element => {
  return (
    <>
      <h2 style={{marginTop: 70, textAlign: 'center'}}>Page Not Found</h2>
      <Link style={{textAlign: 'center'}} to="/">Back to Home</Link>
    </>
  )
}

export default PageNotFound;
