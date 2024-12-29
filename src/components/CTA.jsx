function CTA() {
  return (
    <div
      id="cta"
      className="bg-darkViolet bg-[url('/images/bg-boost-mobile.svg')] md:bg-[url('/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover py-24 md:py-0"
    >
      <section className="wrapper grid justify-items-center gap-6 md:gap-4">
        <h2 className="text-white text-[1.5rem] md:text-[2rem] font-bold">
          Boost your links today
        </h2>

        <a href="#cta" className="btn">
          Get started
        </a>
      </section>
    </div>
  );
}

export default CTA;
