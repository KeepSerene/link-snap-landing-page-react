function Hero() {
  return (
    <div id="hero" className="pb-20 md:pb-32">
      <div className="wrapper text-center md:text-left pb-20 md:pb-32 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-6">
        <section className="grid justify-items-center md:justify-items-start gap-4">
          <h1 className="md:max-w-[15ch] text-veryDarkBlue text-4xl md:text-5xl font-bold">
            More than just shorter links
          </h1>

          <p className="max-w-[35ch]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <a href="#hero" className="btn">
            Get started
          </a>
        </section>

        <img
          src="/images/illustration-working.svg"
          alt=""
          className="w-[550px] md:w-[400px] lg:w-[500px]"
        />
      </div>
    </div>
  );
}

export default Hero;
