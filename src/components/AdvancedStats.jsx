function AdvancedStats() {
  const features = [
    {
      title: "Brand recognition",
      desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      iconSrc: "/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      iconSrc: "/images/icon-detailed-records.svg",
    },
    {
      title: "Fully customizable",
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      iconSrc: "/images/icon-fully-customizable.svg",
    },
  ];

  return (
    <article className="wrapper text-grayishViolet grid gap-4">
      <h2 className="text-veryDarkViolet text-[1.5rem] md:text-[2rem] font-bold capitalize text-center">
        Advanced statistics
      </h2>

      <p className="max-w-[45ch] text-[1rem] text-center mx-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 md:items-start gap-12 md:gap-6">
        {features.map((feature, index) => (
          <section
            key={index}
            className={`bg-softWhite rounded-md p-6 relative ${
              index === 1 ? "md:mt-12" : ""
            } ${index === 2 ? "md:mt-24" : ""}`}
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-darkViolet rounded-full p-4 flex justify-center items-center absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 top-[-18%]">
              <img
                src={`${feature.iconSrc}`}
                alt=""
                className="w-12 h-[auto]"
              />
            </div>

            {/* Connect */}
            {index < 2 && (
              <div className="w-2 h-12 md:w-12 md:h-2 bg-primary absolute left-1/2 -translate-x-1/2 md:translate-x-0 top-full md:left-full md:top-1/2 md:-translate-y-1/2" />
            )}

            <div className="mt-6 grid gap-4">
              <h3 className="text-veryDarkViolet font-bold capitalize">
                {feature.title}
              </h3>

              <p className="text-sm">{feature.desc}</p>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default AdvancedStats;
