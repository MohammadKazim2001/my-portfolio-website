import SkillCard from "../components/SkillCard";

const skillItem = [
  // {
  //   imgSrc: "/images/html.svg",
  //   label: "HTML",
  //   desc: "User Interface",
  // },
  // {
  //   imgSrc: "/images/css3.svg",
  //   label: "CSS",
  //   desc: "User Interface",
  // },
  // {
  //   imgSrc: "/images/bootstrap.svg",
  //   label: "Bootstrap",
  //   desc: "User Interface",
  // },
  // {
  //   imgSrc: "/images/javascript.svg",
  //   label: "JavaScript",
  //   desc: "Interaction",
  // },
  // {
  //   imgSrc: "/images/php.svg",
  //   label: "PHP",
  //   desc: "Programming language",
  // },
  // {
  //   imgSrc: "/images/laravel.svg",
  //   label: "Laravel",
  //   desc: "Backend developement",
  // },
  // {
  //   imgSrc: "/images/mysql.svg",
  //   label: "MySQL",
  //   desc: "Database management system",
  // },
  // {
  //   imgSrc: "/images/tailwindcss.svg",
  //   label: "TailwindCSS",
  //   desc: "User Interface",
  // },
  // {
  //   imgSrc: "/images/react.svg",
  //   label: "React JS",
  //   desc: "Javascript Framework",
  // },
  // {
  //   imgSrc: "/images/expressjs.svg",
  //   label: "ExpressJS",
  //   desc: "Node Framework",
  // },
  // {
  //   imgSrc: "/images/mongodb.svg",
  //   label: "MongoDB",
  //   desc: "Database",
  // },
  // {
  //   imgSrc: "/images/nodejs.svg",
  //   label: "NodeJS",
  //   desc: "Web Server",
  // },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React JS",
    desc: "Javascript Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database management system",
  },
  {
    imgSrc: "/images/laravel.svg",
    label: "Laravel",
    desc: "Backend developement",
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Programming language",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "User Interface",
  },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
