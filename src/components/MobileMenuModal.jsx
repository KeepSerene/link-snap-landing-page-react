function MobileMenuModal({ setIsMobileMenuOpen, navLinkTexts }) {
  return (
    <div
      onClick={() => setIsMobileMenuOpen(false)}
      style={{ backgroundColor: "hsla(255, 11%, 22%, 0.5)" }}
      className="overflow-hidden flex justify-center items-center fixed inset-0 z-10"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <section
        onClick={(event) => event.stopPropagation()}
        className="w-[calc(100%-2rem)] bg-darkViolet text-white font-bold rounded-lg p-4 grid gap-8 relative z-20"
        aria-modal="true"
      >
        <h2 id="modal-title" className="sr-only">
          Mobile menu
        </h2>

        <p id="modal-description" className="sr-only">
          Use the navigation links to explore the site or log in and sign up.
        </p>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close mobile menu"
          className="justify-self-end transition-colors hover:text-primary focus-visible:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav
          style={{ borderColor: "hsla(0, 0%, 75%, 0.25)" }}
          className="border-b pb-4"
        >
          <ul className="flex flex-col items-center gap-4">
            {navLinkTexts.map((navLinkText, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="capitalize transition-colors hover:text-primary focus-visible:text-primary"
                >
                  {navLinkText}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid justify-items-center gap-4">
          <a
            href="#header"
            onClick={() => setIsMobileMenuOpen(false)}
            className="transition-colors hover:text-primary focus-visible:text-primary"
          >
            Login
          </a>

          <a
            href="#header"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn justify-self-stretch"
          >
            Sign up
          </a>
        </div>
      </section>
    </div>
  );
}

export default MobileMenuModal;
