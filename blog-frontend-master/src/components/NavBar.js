import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <header className="text-purple-900 body-font bg-gray-300" style={{fontWeight:"bold"}}>
          <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0" href="/">
              <img
                src="https://www.pinclipart.com/picdir/big/47-476312_india-transparent-clipart-indian-flag-logo-png.png"
                alt=""
                className="w-13 h-14 text-white p-2 "
              />
              <span className="ml-3 text-xl">Travel India</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center pl-4 pr-2">
              <a className="mr-5 hover:text-gray-900" href="/">
                {/* <Link to="/" className="pl-4 pr-2"> */}
                  Home
                {/* </Link> */}
              </a>
              <a className="mr-5 hover:text-gray-900 pl-2 pr-2" href="/about">
                {/* <Link to="/about" className="pl-2 pr-2"> */}
                  About
                {/* </Link> */}
              </a>
              <a className="mr-5 hover:text-gray-900 pl-2 pr-2" href="/articles-List">
                {/* <Link to="/articles-List" className="pl-2 pr-2"> */}
                  ArticlesList
                {/* </Link> */}
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
