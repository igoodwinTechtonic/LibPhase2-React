import * as React from "react";
import NavBar from "./Navbar";
import HamburgerBtn from "./HamburgerBtn";
import Search from "./Search";

/* Render hamburger button only if on mobile */

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">The Library</h1>

        <nav className="header__menu">
          <HamburgerBtn />
          <NavBar />
        </nav>

        <Search />
      </header>
    </>
  );
};

export default Header;

// class Header extends React.Component {
//   render(): JSX.Element {
//     return (
//       <>
//         <header className="header">
//           <h1 className="header__title">The Library</h1>

//           <nav className="header__menu">
//             {/* Hamburger button component */}
//             <HamburgerBtn />
//             {/* Nav bar component */}
//             <NavBar />
//           </nav>

//           {/* Search component */}
//           <Search />
//         </header>
//       </>
//     );
//   }
// }
