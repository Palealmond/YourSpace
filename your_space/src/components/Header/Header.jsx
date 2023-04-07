import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="h-full max-w-full md:w-[200px] max-w-screen-xl bg-teal-500 flex  flex-col justify-center items-left py-1">
        <div className="flex justify-center items-center mb-2 gap-5">
          <div className="flex items-center gap-3">
            <img
              src="https://i.imgur.com/Tei2Tve.png"
              alt="logo"
              className="w-30 h-12"
            />
            <h1 className="text-white text-2xl font-bold flex flex-col">
              Your Space
            </h1>
          </div>
          <form className="flex items-center gap-2">
            <label htmlFor="search" className="text-white text-xs">
              Search Users:
            </label>
            <input
              type="search"
              id="search"
              placeholder="Type query"
              className="flex-auto px-3 py-1.5 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400 bg-white"
            />
            <button
              type="submit"
              className="px-4 py-1 rounded bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-small transition duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
          <button
            type="button"
            className="px-4 py-1 rounded bg-teal-500 text-white hover:bg-white hover:text-teal-500 font-xs transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>

        <nav className="container mx-auto px-4 bg-white py-2 rounded">
          <ul className="container mx-auto flex justify-center items-center gap-5 flex-wrap">
            <li>
              <div className="flex flex-wrap px-2 gap-x-3 w-full">
              <Link className="text-xs text-blue-700" to="/Profile/id:">
         Home
          </Link>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Browse </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Search </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Messages </a>
                <Link className="text-xs text-blue-700" to="/Posts">
         Blog
          </Link>
                <a className="text-xs before:content-[' | ']text-lighter-blue text-blue-700">Bulletins </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Forum </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Groups </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Layouts </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Layouts </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Favorites </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">Invites </a>
                <a className="text-xs after:content-[' | ']text-lighter-blue text-blue-700">About</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
 