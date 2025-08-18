import ProjectCard from "../components/ProjectCard";

const works = [
  {
    imgSrc: "/pro-img/p1-1.jpg",
    title: "Online classified market place for second hand items",
    tags: ["LARAVEL", "REACT", "TAILWIND CSS"],
    projectLink: "#",
  },
  {
    imgSrc: "/pro-img/p-1.png",
    title: "Film Finder",
    tags: ["REACT JS", "API", "TAILWIND CSS"],
    projectLink: "https://film-finder-black.vercel.app/",
  },

  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["REACT JS", "API"],
    projectLink: "#",
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
