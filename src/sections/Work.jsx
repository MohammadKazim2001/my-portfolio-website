import ProjectCard from "../components/ProjectCard";

const works = [
  {
    imgSrc: "/pro-img/p-5.png",
    title: "Online classified market place for second hand items",
    tags: ["LARAVEL 12", "REACT JS", "TAILWIND CSS"],
    projectLink: "",
  },
  {
    imgSrc: "/pro-img/p-1.png",
    title: "Film Finder",
    tags: ["REACT JS", "API", "TAILWIND CSS"],
    projectLink: "https://film-finder-black.vercel.app/",
  },

  {
    imgSrc: "/pro-img/p-4.png",
    title: "MERN e-commerce website",
    tags: ["REACT JS", "NODE JS", "EXPRESS JS", "MONGO DB", "API"],
    projectLink: "https://mern-ecommerce-b7xo.vercel.app/",
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
