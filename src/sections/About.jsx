const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 ring-inset ring-2 ring-zinc-50/10 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Welcome! I&apos;m Mohammad Kazim Amiri,a Creative and
            detail-oriented Web Developer with a strong foundation in HTML, CSS,
            JavaScript, Bootstrap, Tailwind CSS, and React.js for frontend
            development, and PHP/Laravel, Node js, express js and mongo DB for
            backend solutions. Dedicated to crafting responsive, intuitive, and
            visually appealing websites and applications that deliver real value
            to users. Eager to apply technical expertise and a problem-solving
            mindset to build innovative digital experiences that make a positive
            impact.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-zinc-400 text-sm">{label}</p>
              </div>
            ))}
            <img
              className="ml-auto md:w-[40px] md:h-[40px]"
              src="/images/logo3.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
