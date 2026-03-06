"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setProgress(30);
    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 700);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 800);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClose = () => setMobileOpen(false);
    window.addEventListener("scroll", handleClose, { passive: true });
    window.addEventListener("touchmove", handleClose, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("touchmove", handleClose);
    };
  }, [mobileOpen]);

  return (
    <header className="body-font bg-background/50 sticky top-0 border-b z-40 backdrop-blur">
      <LoadingBar color="#f11946" progress={progress} />
      <div className="w-[90%] mx-auto flex p-4 justify-between items-center">
        <div className="logo">
          <Link
            className="flex title-font font-medium items-center  mb-4 md:mb-0"
            href="/"
          >
            <span></span>
            <span className="ml-3 text-xl">CodingBlog</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className="items-center hidden md:flex justify-between ">
          <nav className="md:ml-auto flex items-center text-base justify-center">
            <Link className="mr-5 hover:font-semibold hover:scale-105" href="/">
              Home
            </Link>
            <Link
              className="mr-5 hover:font-semibold hover:scale-105"
              href="/notes"
            >
              Notes
            </Link>
            <Link
              className="mr-5 hover:font-semibold hover:scale-105"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="mr-5 hover:font-semibold hover:scale-105"
              href="/about"
            >
              About
            </Link>
            <Link
              className="mr-5 hover:font-semibold hover:scale-105"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <div className="button block space-x-3">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
          <div className="themeBox ml-3">
            <ModeToggle />
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-background/50 border-t">
          <nav className="flex flex-col p-4 w-[90%] mx-auto">
            <Link onClick={() => setMobileOpen(false)} className="py-2" href="/">
              Home
            </Link>
            <Link onClick={() => setMobileOpen(false)} className="py-2" href="/blog">
              Blog
            </Link>
            <Link onClick={() => setMobileOpen(false)} className="py-2" href="/about">
              About
            </Link>
            <Link onClick={() => setMobileOpen(false)} className="py-2" href="/contact">
              Contact
            </Link>
            <div className="flex space-x-3 py-3">
              <Button asChild>
                <Link onClick={() => setMobileOpen(false)} href="/login">
                  Login
                </Link>
              </Button>
              <Button asChild>
                <Link onClick={() => setMobileOpen(false)} href="/signup">
                  Sign up
                </Link>
              </Button>
            </div>
            <div className="mt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
