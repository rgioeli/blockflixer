"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({}) => {
  const [openNav, setOpenNav] = useState();
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-600 text-white p-5">
      <nav className="container m-auto flex justify-between">
        <Link href="#">
          <Image
            alt={"Blockflixer"}
            src={"/flixer.png"}
            height={50}
            width={100}
          />
        </Link>
        <div>
          <div
            className="md:hidden cursor-pointer flex justify-end"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          <ul className="hidden md:flex space-x-5">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
          </ul>
          {openNav && (
            <div className="md:hidden">
              <div>
                <ul className="flex flex-col items-end gap-y-2 mt-5 text-xl font-bold">
                  <li className="">
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
