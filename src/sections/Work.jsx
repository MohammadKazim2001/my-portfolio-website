import ProjectCard from "../components/ProjectCard";

const works = [
  {
    imgSrc: "/pro-img/p-2.png",
    title: "Online classified maket place for second hand items",
    tags: ["LARAVEL", "REACT", "Tailwind CSS"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/pro-img/p-1.png",
    title: "Film Finder",
    tags: ["React.js", "API", "Tailwind CSS"],
    projectLink: "https://film-finder-black.vercel.app/",
  },

  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
];

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
