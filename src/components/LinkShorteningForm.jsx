// React imports
import { useState } from "react";

function LinkShorteningForm({ onLinkShorten }) {
  const [urlInput, setUrlInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Clear any previous errors
    setShouldThrowError(false);
    setErrorMsg("");

    // Trim the input URL and validate
    const trimmedUrl = urlInput.toLowerCase().trim();

    if (!trimmedUrl) {
      setShouldThrowError(true);
      setErrorMsg("Please add a link");
      setIsLoading(false);
      setUrlInput("");

      return;
    }

    try {
      // URL validation and encoding
      let encodedUrl;

      try {
        const url = new URL(trimmedUrl);
        encodedUrl = url.toString().replace(/\s+/g, "+");
      } catch (err) {
        throw new Error("Please enter a valid URL");
      }

      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: encodedUrl }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      if (data.result_url) {
        // Call the parent handler with both URLs
        onLinkShorten(trimmedUrl, data.result_url);

        setUrlInput("");
      }
    } catch (err) {
      console.error(err);
      setShouldThrowError(true);
      setErrorMsg(err.message || "Failed to shorten URL. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="wrapper bg-darkViolet bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover rounded-lg flex flex-col md:flex-row md:items-center gap-4"
    >
      <div className="flex-1 grid gap-2">
        <label htmlFor="link-shortener-input" className="sr-only">
          Enter a u r l to shorten it
        </label>

        <input
          type="text"
          id="link-shortener-input"
          value={urlInput}
          onChange={(event) => setUrlInput(event.target.value)}
          placeholder="Shorten a link here..."
          style={{ borderColor: shouldThrowError ? "hsl(0, 87%, 67%)" : "" }}
          className={`bg-softWhite text-veryDarkBlue rounded-md border-2 border-transparent px-4 py-2 ${
            shouldThrowError
              ? "placeholder:text-secondaryTranslucent"
              : "placeholder:text-grayishViolet"
          } outline-none transition-colors focus-within:border-primary`}
        />

        {shouldThrowError && (
          <p className="text-secondary text-sm">
            <em>{errorMsg}</em>
          </p>
        )}
      </div>

      <button
        type="submit"
        style={{
          borderRadius: "0.375rem",
          opacity: isLoading ? "0.5" : "",
          cursor: isLoading ? "not-allowed" : "",
        }}
        className="btn"
      >
        {isLoading ? "Shortening..." : "Shorten it!"}
      </button>
    </form>
  );
}

export default LinkShorteningForm;
