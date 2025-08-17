import { useState } from "react";
import PropTypes from "prop-types";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Online Classifieds marketplace Web App for second hand items",
    period: "Jan 2024 - Present",
    description: [
      "Completely dynamic database structure with Laravel 12 and MySQL, that can be easily extended for future features.",
      "User authentication, ad posting, and real-time chat.",
      "Real-time chat system (Laravel WebSockets) for seamless buyer-seller communication, reducing response time by 50%.",
      "Responsive UI with Tailwind CSS for mobile-first design.",
      "RESTful API integration with Laravel backend for secure data handling.",
      "Optimizing performance, achieving ~2s page load times via code-splitting and caching.",
      "User email verification code via the otp.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Personal project: Movie Search & Rating App (React.js + API)",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Built a movie search application in React.js using the usePopcorn API to fetch real-time movie data.",
      "Implemented search functionality to find movies by title and display detailed information.",
      "Added a favorites list feature, allowing users to save and manage their favorite movies",
      "Integrated a custom star rating system (1–10) so users can rate movies directly in the app.",
      "Designed a responsive, mobile-friendly UI with Tailwind CSS for a smooth user experience.",
      "Used React hooks and state management to handle API calls, loading states, and user interactions efficiently.",
    ],
  },
  {
    title: "Laravel Developer",
    company:
      "Personal Project: MIS for undergraduate students (Personal project)",
    period: "",
    description: [
      "Built a role-based MIS system in Laravel for students, teachers, and administrators.",
      "Implemented secure student–teacher assignment workflow, allowing students to choose a supervisor and submit final monographs.",
      "Developed a teacher dashboard to review, accept, or reject submissions with feedback.",
      "Created an admin panel for managing users, monographs, and system settings.",
      "Integrated authentication, access control, and file upload handling for large PDF monographs.",
      "Ensured clean database structure in MySQL for efficient querying and reporting.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const [showMore, setShowMore] = useState(false);

  // ✅ Mobile: show 2 items if collapsed
  // ✅ Desktop: always show all
  const itemsToShow =
    typeof window !== "undefined" && window.innerWidth >= 640
      ? exp.description.length // desktop (sm and up)
      : showMore
      ? exp.description.length // mobile expanded
      : 2; // mobile collapsed

  return (
    <div className="text-white rounded-lg shadow p-6 ring-inset ring-1 ring-zinc-50/10 cursor-pointer bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60  transition-colors">
      <h3 className="text-xl font-semibold">{exp.title}</h3>
      <p className="text-sm text-gray-100">
        {exp.company} {exp.period && `| ${exp.period}`}
      </p>

      <ul className="mt-3 list-disc list-inside space-y-1 text-gray-200">
        {exp.description.slice(0, itemsToShow).map((item, i) => (
          <li className="ml-5" key={i}>
            {item}
          </li>
        ))}
      </ul>

      {/* ✅ Only show toggle button on mobile */}
      {exp.description.length > 2 && (
        <button
          className="mt-3 text-sm text-sky-400 cursor-pointer hover:underline block sm:hidden"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

// ✅ Add PropTypes validation
ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
