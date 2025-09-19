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
            Welcome! I&apos;m Mohammad Kazim Amiri, a creative and passionate
            Web Developer with hands-on experience in modern frontend
            technologies — including React.js, TypeScript, and Tailwind CSS —
            and backend development using Node.js, Express.js, MongoDB, and
            PHP/Laravel. Eager to contribute to real-world projects, I bring
            strong problem-solving skills, attention to detail, and a
            collaborative mindset. Proficient in Git/GitHub and familiar with
            Agile/Scrum workflows, I’m excited to learn from experienced
            developers, grow through mentorship, and help build scalable,
            user-focused applications. Fluent in English and Dari/Pashto, I’m
            ready to bring energy, curiosity, and technical skill to your
            development team — whether you’re a startup, agency, or enterprise.
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
