// React imports
import { useEffect, useState } from "react";

// Constant imports
import { NAV_LINK_TEXTS } from "../utils/constants";

function Header({ setIsMobileMenuOpen }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      setIsSticky(window.scrollY > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? "bg-white shadow-md sticky top-0 z-50 transition-shadow" : ""
      }`}
    >
      <header
        id="header"
        style={{ paddingBlock: isSticky ? "1.5rem" : "" }}
        className="wrapper text-sm font-bold flex justify-between items-center"
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#header">
            <img src="/images/logo.svg" alt="Logo" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NAV_LINK_TEXTS.map((navLinkText, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="capitalize transition-colors hover:text-veryDarkBlue focus-visible:text-veryDarkBlue"
                  >
                    {navLinkText}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="#header"
            className="transition-colors hover:text-veryDarkBlue focus-visible:text-veryDarkBlue"
          >
            Login
          </a>

          <a href="#header" className="btn">
            Sign up
          </a>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Click to open mobile menu"
          className="md:hidden transition-colors hover:text-veryDarkBlue focus-visible:text-veryDarkBlue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}

export default Header;
