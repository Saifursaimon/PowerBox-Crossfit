import Link from "next/link";
import React from "react";
import { TbGymnastics } from "react-icons/tb";
export default function Header() {
  const listItems = (
    <>
      <li>
        <Link href="">Home</Link>
      </li>
      <li>
        <Link href="">About</Link>
      </li>
      <li>
        <Link href="">Classes</Link>
      </li>
      <li>
        <Link href="">Contact</Link>
      </li>
      <li className="mt-2">
        <Link href="" className="btn btn-outline btn-error btn-sm lg:hidden">
          Join Now
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar  shadow-sm  py-3  px-5">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl  ">
          {" "}
          <TbGymnastics className="text-2xl" /> PowerBox CrossFit
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{listItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end lg:hidden mt-2">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex items-end font-bold"
          >
            {listItems}
          </ul>
        </div>
        <a className="btn btn-outline  btn-error  hidden lg:flex">
         Join Now
        </a>
      </div>
    </div>
  );
}
