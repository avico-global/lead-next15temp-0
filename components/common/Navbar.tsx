"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import FullContainer from "./FullContainer";
import Container from "./Container";

interface NavbarProps {
  logo?: string;
  imagePath?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logo = "/img/logo.png",
  imagePath = "/img",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path: string): string => {
    return pathname === path
      ? "text-primary border-b"
      : "text-black hover:text-primary ";
  };

  return (
    <FullContainer className="bg-white sticky top-0 z-20 py-3 shadow-sm">
      <Container className="md:flex-row md:justify-between">
        <Image
          height={100}
          width={80}
          src={logo}
          alt="Logo"
          title="Logo"
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
        />

        {/* Hamburger Menu for Mobile */}
        <div className=" flex lg:hidden items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <ArrowRight size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex font-bold justify-center items-center gap-6 text-lg ">
          <Link title="Home" href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link
            title="About Us"
            href="/about-us"
            className={getLinkClass("/about")}
          >
            About Us
          </Link>
          <Link
            title="FAQs"
            href="/our-services"
            className={getLinkClass("/faqs")}
          >
            Services
          </Link>
          <Link
            title="Contact Us"
            href="/contact-us"
            className={getLinkClass("/contact-us")}
          >
            Contact Us
          </Link>
          <Link
            title="Blog"
            href="/blog"
            className={getLinkClass("/blogs")}
          >
           Our Blog
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="flex flex-col items-center gap-4 text-lg md:hidden">
            <Link href="/" className={getLinkClass("/")} onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className={getLinkClass("/about")}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/our-services"
              className={getLinkClass("/faqs")}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className={getLinkClass("/contact-us")}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        )}
      </Container>
    </FullContainer>
  );
};

export default Navbar;
