/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "./IndexDropdown";

export default function Navbar({ title }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to='/'
              className="text-green-700 text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Stones Empire
              <small
                className="text-yellow-700 block font-bold m-0 text-xs"
              >
                {title}
              </small>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-gray-500 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  to='/'
                  className="bg-gray-500 hover:bg-green-700 cursor-pointer active:bg-lightBlue-600 rounded shadow hover:shadow-lg outline-none hover:text-blueGray-700 m-2 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to='/about'
                  className="bg-gray-500 hover:bg-green-700 cursor-pointer active:bg-lightBlue-600 rounded shadow hover:shadow-lg outline-none hover:text-blueGray-700 m-2 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >About us
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to='/contact'
                  className="bg-gray-500 hover:bg-green-700 cursor-pointer active:bg-lightBlue-600 rounded shadow hover:shadow-lg outline-none hover:text-blueGray-700 m-2 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >contact us
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/blog/posts"
                  className="bg-gray-500 hover:bg-green-700 cursor-pointer active:bg-lightBlue-600 rounded shadow hover:shadow-lg outline-none hover:text-blueGray-700 m-2 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >Blog Posts
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-yellow-700 text-yellow-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="text-text-yellow-500 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-yellow-700 text-yellow-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="text-text-yellow-500 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
