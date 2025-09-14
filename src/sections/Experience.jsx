import { useState } from "react";
import PropTypes from "prop-types";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "E-commerce Web Application (MERN + Redux)",
    period: "Aug 2025 - Sep 2025",
    description: [
      "Developing a full-featured e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented Redux for efficient state management, handling cart, authentication, and product data flow seamlessly.",
      "Product catalog with search, filtering, sorting, and pagination for better user experience.",
      "Secure authentication and authorization with JWT-based login and role-based access control.",
      "Shopping cart, checkout flow, and order management system with real-time updates.",
      "Optimized frontend performance with React hooks, code-splitting, and lazy loading.",
      "Responsive design with Tailwind CSS ensuring smooth user experience across all devices.",
      "Planned deployment with scalability and API-first design for easy integration with future features.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Online Classifieds Marketplace Web App for Second-Hand Items",
    period: "April 2025 - Aug 2025",
    description: [
      "Designed and developed a fully responsive frontend in React.js and Tailwind CSS, optimized for both desktop and mobile devices.",
      "Applied React Context API for state management, ensuring smooth handling of authentication, listings, and chat states across the app.",
      "Delivered optimized performance with code-splitting, caching, and lazy loading to ensure fast page loads and smooth navigation.",
      "Developed a fully dynamic classifieds platform inspired by Divar and Quikr, enabling users to buy and sell second-hand items.",
      "Implemented flexible database architecture in Laravel 12 with MySQL to support scalable categories, subcategories, and city-based listings.",
      "Built dual dashboards: an admin dashboard for managing users, ads, and reports, and a user dashboard for posting and managing listings.",
      "Integrated secure authentication, ad posting workflow, and user verification via OTP.",
    ],
  },

  {
    title: "Front End Developer",
    company: "Personal Project: Movie Search & Rating App (React.js + API)",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Built a movie search application in React.js using the usePopcorn API to fetch real-time movie data.",
      "Implemented search functionality to find movies by title and display detailed information.",
      "Added a favorites list feature, allowing users to save and manage their favorite movies.",
      "Integrated a custom star rating system (1–10) so users can rate movies directly in the app.",
      "Designed a responsive, mobile-friendly UI with Tailwind CSS for a smooth user experience.",
      "Used React hooks and state management to handle API calls, loading states, and user interactions efficiently.",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Personal Project: MIS for Undergraduate Students",
    period: "Jun 2024 - Jul-2024",
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
