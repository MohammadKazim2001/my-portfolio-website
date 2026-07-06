import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Front End & Automation Engineer",
    company: "The Flame",
    period: "Apr 2026 - Present",
    location: "Dubai, UAE",
    workType: "Remote",
    link: "https://theflame.life/",
    description: [
      "Designed and developed end-to-end automation testing framework using Playwright, Pytest, and Python for web application testing",
      "Created reusable Page Object Model (POM) architecture with fixtures, utilities, and custom helpers to improve test maintainability",
      "Automated critical user journeys including authentication, onboarding, profile management, subscriptions, referrals, and payment workflows",
      "Integrated Allure Reports to generate detailed test execution reports with screenshots, logs, and failure diagnostics",
      "Configured automated test execution in CI/CD pipelines, enabling continuous validation on every deployment",
      "Implemented data-driven testing, cross-browser testing, and parallel execution to improve test coverage and execution speed",
      "Collaborated closely with developers to identify, reproduce, and verify bug fixes before production releases",
      "Implemented frontend features using React and JavaScript while ensuring high-quality releases through automated regression testing"
    ],
    tech: "Python, Playwright, Pytest, Allure Report, React, JavaScript, GitHub Actions"
  },
  {
    title: "Full Stack Developer",
    company: "Imperial Exclusive - E-commerce Payment System",
    workType: "Contract",
    period: "Nov 2025 - Dec 2025",
    link: "https://impeerialexclusive.com/",
    description: [
      "Engineered complete payment processing system integrating Stripe API for secure credit card transactions",
      "Implemented PCI-compliant checkout using Stripe Elements with real-time validation and error handling",
      "Built financial logic engine sequencing calculations: discounts → tax → shipping → final Stripe charge",
      "Integrated Shippo API for dynamic shipping rates and automated tax calculation based on customer location",
      "Reduced cart abandonment with clear, real-time cost breakdowns and reliable payment execution",
      "Configured webhooks for asynchronous order status updates and payment failure handling",
    ],
    tech: "React, TypeScript, Laravel, Stripe API, Shippo API, MySQL",
  },
  {
    title: "Full Stack Developer",
    company: "Mawoud Danaye Educational MIS",
    workType: "Contract",
    period: "Oct 2025 - Dec 2025",
    description: [
      "Architected comprehensive educational management system using NestJS (backend) and React/TypeScript (frontend)",
      "Designed modular REST API with 15+ business entities (Students, Teachers, Finance, Enrollment, etc.)",
      "Implemented JWT authentication with role-based access control for admin, teacher, and student portals",
      "Built financial management subsystem handling salary payments, contracts, purchases, sales, and fines",
      "Created responsive admin dashboard with document upload/preview, modal forms, and protected routes",
      "Delivered production-ready system digitizing entire educational center operations from registration to accounting",
    ],
    tech: "NestJS, TypeORM, React, TypeScript, JWT, REST API, MySQL",
  },
  {
    title: "Full Stack Project",
    company: "Afghan Local Marketplace (OLX-style Platform)",
    workType: "Personal Project",
    period: "April 2025 - Aug 2025",
    description: [
      "Developed full-stack classifieds platform for Afghanistan using Laravel (API) and React (frontend)",
      "Implemented user registration with phone/email verification and secure ad posting with image uploads",
      "Built dual dashboards: admin panel for moderation and user dashboard for managing listings",
      "Created location-based filtering using city/region selection for hyperlocal trade within Afghan provinces",
      "Optimized frontend performance for low-bandwidth environments with code-splitting and lazy loading",
      "Ensured platform safety with reporting system and admin moderation tools",
    ],
    tech: "Laravel, React, MySQL, Tailwind CSS, REST API",
  },
  {
    title: "Full Stack Project",
    company: "E-commerce Platform (MERN + Redux)",
    workType: "Personal Project",
    period: "Aug 2025 - Sep 2025",
    description: [
      "Built full-featured e-commerce platform using MERN stack with Redux for state management",
      "Implemented product catalog with search, filtering, sorting, and pagination",
      "Developed secure authentication with JWT and role-based access control",
      "Created shopping cart, checkout flow, and order management with real-time updates",
      "Optimized performance with React hooks, code-splitting, and lazy loading",
      "Designed responsive UI with Tailwind CSS for all devices",
    ],
    tech: "React, Node.js, Express, MongoDB, Redux, Tailwind CSS",
  },
  {
    title: "Front End Project",
    company: "Movie Search & Rating App (React.js + API)",
    workType: "Personal Project",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Built movie search application using usePopcorn API to fetch real-time movie data",
      "Implemented search functionality with detailed movie information display",
      "Added favorites list feature for saving and managing preferred movies",
      "Created custom star rating system (1–10) for user ratings",
      "Designed responsive, mobile-friendly UI with Tailwind CSS",
      "Used React hooks for efficient state management and API handling",
    ],
    tech: "React, API Integration, Tailwind CSS, State Management",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Work Experience & Projects
        </h2>
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

  const itemsToShow =
    typeof window !== "undefined" && window.innerWidth >= 640
      ? exp.description.length
      : showMore
        ? exp.description.length
        : 2;

  return (
    <div className="text-white rounded-lg shadow p-6 ring-inset ring-1 ring-zinc-50/10 cursor-pointer bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 hover:shadow-md hover:shadow-cyan-500 duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <div>
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <Link to={exp.link || "#"}>
            {/* <p className="text-sm text-gray-100 mt-1 hover:text-cyan-400 hover:underline">
              {exp.company} {exp.period && `| ${exp.period}`}
            </p> */}
            <p className="text-sm text-gray-100 mt-1 hover:text-cyan-400 hover:underline">
              {exp.company}
              {exp.workType && ` | ${exp.workType}`}
              {exp.location && ` | ${exp.location}`}
              {exp.period && ` | ${exp.period}`}
            </p>
          </Link>
        </div>
        <span className="text-xs text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start">
          {exp.tech}
        </span>
      </div>

      <ul className="mt-3 list-disc list-inside space-y-1 text-gray-200">
        {exp.description.slice(0, itemsToShow).map((item, i) => (
          <li className="ml-5" key={i}>
            {item}
          </li>
        ))}
      </ul>

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

ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.string,
  }).isRequired,
};
