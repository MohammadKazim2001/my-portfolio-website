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
            Welcome! I&apos;m Mohammad Kazim Amiri, a creative and
            detail-oriented Web Developer specializing in modern frontend
            development with React.js and Tailwind CSS, and robust backend
            solutions using PHP/Laravel, Node.js, Express.js, and MongoDB. I’m
            passionate about building responsive, intuitive, and visually
            engaging web applications that provide real value to users. With a
            solid foundation in HTML, CSS, JavaScript, and Bootstrap, along with
            strong skills in Git and GitHub for efficient version control and
            collaboration, I continuously refine my abilities to craft
            innovative digital experiences. Eager to apply my expertise,
            problem-solving mindset, and creativity to develop impactful
            solutions.
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
