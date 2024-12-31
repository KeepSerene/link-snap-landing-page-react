import { LISTS, SOCIAL_LINKS } from "../utils/constants";

function Footer() {
  return (
    <footer id="footer" className="bg-veryDarkViolet">
      <div className="wrapper text-center lg:text-left flex flex-col lg:flex-row gap-8 lg:gap-0 items-center lg:items-start lg:justify-between">
        <a href="#footer">
          <img src="images/logo-white.svg" alt="Logo" />
        </a>

        <div className="text-white text-sm grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {LISTS.map((list, index) => (
            <ul key={index} className="capitalize grid gap-4">
              {list.map((link, idx) =>
                idx === 0 ? (
                  <li key={idx}>
                    <b>{link}</b>
                  </li>
                ) : (
                  <li key={idx}>
                    <a
                      href="#footer"
                      className="text-customGray transition-colors hover:text-primary focus-visible:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          ))}

          <ul className="self-start flex items-center gap-4">
            {SOCIAL_LINKS.map((socialLink, index) => (
              <li key={index}>
                <a
                  href="#footer"
                  aria-label={`Click to follow our ${socialLink.site} page`}
                  title={socialLink.site}
                  className="text-white transition-colors hover:text-primary focus-visible:text-primary"
                >
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
