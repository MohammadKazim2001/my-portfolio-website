const education = [
  {
    degree:
      "Bachelor of Science in Computer Science(Information Systems Department)",
    institution: "Kabul Polytechnic University",
    period: "2021 - Present",
    description:
      "Focused on software development, web technologies, and databases.",
  },
  {
    degree: "High School Diploma (General Education)",
    institution: "Qala-e-Shahada High School",
    period: "2008 - 2020",
    description: "Completed the high school leasons.",
  },
  {
    degree: "English Language Certification",
    institution: "Ayandagan English Language Center",
    period: "2014 - 2017",
    description:
      "Completed an advanced course in English writing and communication.",
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="text-white rounded-lg shadow p-6 border-gray-50 cursor-pointer bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-inset ring-1 ring-zinc-50/10 transition-colors"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-200">
                {edu.institution} | {edu.period}
              </p>
              <p className="mt-2 text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
