// React imports
import { useEffect, useState } from "react";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShorteningForm from "./components/LinkShorteningForm";
import ShortenedLinks from "./components/ShortenedLinks";
import AdvancedStats from "./components/AdvancedStats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MobileMenuModal from "./components/MobileMenuModal";

// Constant imports
import { STORAGE_KEY } from "./utils/constants";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState([]);

  // Effect to control body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  // Load shortened links (if any) on mount
  useEffect(() => {
    const savedLinks = localStorage.getItem(STORAGE_KEY);

    if (savedLinks) setShortenedLinks(JSON.parse(savedLinks));
  }, []);

  const addShortenedLink = (originalUrl, shortenedUrl) => {
    const newLinks = [{ originalUrl, shortenedUrl }, ...shortenedLinks].slice(
      0,
      3
    );

    setShortenedLinks(newLinks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newLinks));
  };

  return (
    <div
      id="app"
      className="min-h-screen bg-softWhite text-customGray font-poppins text-[1rem] md:text-baseFS font-medium"
    >
      <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main>
        <div className="relative">
          <Hero />

          <div className="wrapper absolute inset-x-0 -translate-y-1/2">
            {/* Floating section */}
            <LinkShorteningForm onLinkShorten={addShortenedLink} />
          </div>

          <div
            style={{ backgroundColor: "hsla(257, 7%, 63%, 0.2)" }}
            className="pt-20 md:pt-32"
          >
            {/* Conditionally rendered */}
            <ShortenedLinks links={shortenedLinks} />

            <AdvancedStats />
          </div>
        </div>

        <CTA />
      </main>

      <Footer />

      {isMobileMenuOpen && (
        <MobileMenuModal setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </div>
  );
}

export default App;
