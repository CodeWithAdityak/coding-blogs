"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
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
        <div className="items-center hidden md:flex justify-between ">
          <nav className="md:ml-auto flex items-center text-base justify-center">
            <Link className="mr-5 hover:font-semibold hover:scale-105" href="/">
              Home
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
    </header>
  );
};

export default Navbar;
