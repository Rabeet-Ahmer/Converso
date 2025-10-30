"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar relative">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer gap-2.5">
          <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          <h1 className="max-sm:text-xl">Mentora</h1>
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <button className="btn-primary">
          <Image src={"/icons/plus.svg"} alt="plus" width={12} height={12} />
          <Link href={"/companions/new"}>Build a new companion</Link>
        </button>
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

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-black py-4 px-4 lg:hidden z-50">
          <div className="flex flex-col gap-4">
            <NavItems />
            <button className="btn-primary w-full justify-center">
              <Image src={"/icons/plus.svg"} alt="plus" width={12} height={12} />
              <Link href={"/companions/new"}>Build a new companion</Link>
            </button>
            <SignedOut>
              <SignInButton>
                <button className="btn-signin w-full justify-center">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
