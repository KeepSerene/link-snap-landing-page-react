// React imports
import { useState } from "react";

function LinkShorteningForm() {
  const [urlInput, setUrlInput] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setShortenedUrl("");

    if (!urlInput.trim()) {
      setShouldThrowError(true);
      setErrorMsg("Please add a link");
      setIsLoading(false);

      return;
    }

    const API_URL = "https://cleanuri.com/api/v1/shorten";

    try {
      const formData = new FormData();
      formData.append("longUrl", urlInput.trim());

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      if (data.request_url) {
        console.log("Shortedned URL:", data.request_url);

        setShortenedUrl(data.request_url);
        setShouldThrowError(false);
        setErrorMsg("");
        setUrlInput("");
      }
    } catch (err) {
      console.error(err);
      setShouldThrowError(true);
      setErrorMsg(err.message || "Failed to shorten URL. Please try again!");
    } finally {
      setIsLoading(false);
    }

    console.log(urlInput.toLowerCase().trim());
    setShouldThrowError(false);
    setErrorMsg("");
    setUrlInput("");
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
        style={{ borderRadius: "0.375rem" }}
        className="btn"
      >
        Shorten it!
      </button>
    </form>
  );
}

export default LinkShorteningForm;
