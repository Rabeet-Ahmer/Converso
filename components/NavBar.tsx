"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer gap-2.5">
          <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          <h1>Mentora</h1>
        </div>
        <div></div>
      </Link>
      <button className="btn-primary">
        <Image src={"/icons/plus.svg"} alt="plus" width={12} height={12} />
        <Link href={"/companions/new"}>Build a new companion</Link>
      </button>
      <div className="flex items-center gap-8 -ml-28">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
