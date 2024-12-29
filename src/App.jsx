// React imports
import { useEffect, useState } from "react";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShorteningForm from "./components/LinkShorteningForm";
import AdvancedStats from "./components/AdvancedStats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MobileMenuModal from "./components/MobileMenuModal";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinkTexts = ["features", "pricing", "resources"];

  return (
    <div
      id="app"
      className="min-h-screen bg-softWhite text-customGray font-poppins text-[1rem] md:text-baseFS font-medium"
    >
      <Header
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navLinkTexts={navLinkTexts}
      />

      <main>
        <div className="relative">
          <Hero />

          <div className="wrapper absolute inset-x-0 -translate-y-1/2">
            {/* Floating section */}
            <LinkShorteningForm />
          </div>

          <AdvancedStats />
        </div>

        <CTA />
      </main>

      <Footer />

      {isMobileMenuOpen && (
        <MobileMenuModal
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          navLinkTexts={navLinkTexts}
        />
      )}
    </div>
  );
}

export default App;
