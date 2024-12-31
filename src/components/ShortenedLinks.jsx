import { useState } from "react";

function ShortenedLinks({ links }) {
  if (!links || links.length === 0) return null;

  const [copiedUrlIndex, setCopiedUrlIndex] = useState(null);

  const handleCopy = async (shortenedUrl, index) => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);

      setCopiedUrlIndex(index);

      // Reset the "Copied!" state after 3 secs
      setTimeout(() => setCopiedUrlIndex(null), 3000);
    } catch (error) {
      console.error("Failed to copy:", error.message);
    }
  };

  return (
    <div className="wrapper">
      <ul className="grid gap-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="bg-softWhite text-sm rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0"
          >
            <span
              style={{
                maxWidth: link.originalUrl.length > 25 ? "25ch" : "",
                wordBreak: link.originalUrl.length > 25 ? "break-word" : "",
              }}
              className="text-veryDarkBlue"
            >
              {link.originalUrl}
            </span>

            <div className="border-t border-customGray pt-4 md:pt-0 md:border-none flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-primary">{link.shortenedUrl}</span>

              <button
                type="button"
                onClick={() => handleCopy(link.shortenedUrl, index)}
                style={{
                  backgroundColor:
                    copiedUrlIndex === index ? "hsl(257, 27%, 26%)" : "",
                  borderRadius: "0.325rem",
                }}
                className="btn"
              >
                {copiedUrlIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortenedLinks;
