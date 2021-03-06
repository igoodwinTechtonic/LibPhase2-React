import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = (): JSX.Element | null => {
  return (
    <>
      <section className="hero">
        <h2 className="hero__title">Books.</h2>
        <p className="hero__text">Read em & weep</p>
      </section>

      <section className="welcome">
        <h3 className="welcome__text--title">Welcome to the Library</h3>

        <p className="welcome__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>

        <Link to="/bookshelf">
          <button className="btn">See Books</button>
        </Link>

        <p className="welcome__text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </p>

        <Link to="/add">
          <button className="btn">Add a Book</button>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
