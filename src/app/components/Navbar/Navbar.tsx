/** @format */
"use client";
import React, { useState } from "react";
import { LoginButton } from "../LoginButton/LoginButton";
// import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Navbar.css";
import { useActiveAccount } from "thirdweb/react";

const Navbar = () => {
  const account = useActiveAccount();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const router = useRouter();

  return (
    <>
      <nav className="header">
        <div className="container">
          <Link href="/" passHref>
            <h1>
              Winter<span className="primary">Dao</span>
            </h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link href="/cryptochart" passHref>
                Cryptochart
              </Link>
            </li>
            {/* <li onClick={handleClick}>
              <Link href="/staking" passHref>
                Staking
              </Link>
            </li> */}
            <li onClick={handleClick}>
              <Link href="/coffee" passHref>
                Buy me a coffee
              </Link>
            </li>
            {/* {account && (
              <>
                <li onClick={handleClick}>
                  <Link href="/airdrop" passHref>
                    Airdrop page
                  </Link>
                </li>
              </>
            )} */}
          </ul>
          <div className="btn-group">
            <LoginButton />
            {/* {router.pathname !== "/airdrop" && <LoginButton />} */}
          </div>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} style={{ color: "#333" }} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
