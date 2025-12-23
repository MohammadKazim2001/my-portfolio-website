// import { useState } from "react";
// import PropTypes from "prop-types";

// const experiences = [
//   {
//     title: "Full Stack Developer",
//     company: "E-commerce Web Application (MERN + Redux)",
//     period: "Aug 2025 - Sep 2025",
//     description: [
//       "Developing a full-featured e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
//       "Implemented Redux for efficient state management, handling cart, authentication, and product data flow seamlessly.",
//       "Product catalog with search, filtering, sorting, and pagination for better user experience.",
//       "Secure authentication and authorization with JWT-based login and role-based access control.",
//       "Shopping cart, checkout flow, and order management system with real-time updates.",
//       "Optimized frontend performance with React hooks, code-splitting, and lazy loading.",
//       "Responsive design with Tailwind CSS ensuring smooth user experience across all devices.",
//       "Planned deployment with scalability and API-first design for easy integration with future features.",
//     ],
//   },
//   {
//     title: "Full Stack Developer",
//     company: "Online Classifieds Marketplace Web App for Second-Hand Items",
//     period: "April 2025 - Aug 2025",
//     description: [
//       "Designed and developed a fully responsive frontend in React.js and Tailwind CSS, optimized for both desktop and mobile devices.",
//       "Applied React Context API for state management, ensuring smooth handling of authentication, listings, and chat states across the app.",
//       "Delivered optimized performance with code-splitting, caching, and lazy loading to ensure fast page loads and smooth navigation.",
//       "Developed a fully dynamic classifieds platform inspired by Divar and Quikr, enabling users to buy and sell second-hand items.",
//       "Implemented flexible database architecture in Laravel 12 with MySQL to support scalable categories, subcategories, and city-based listings.",
//       "Built dual dashboards: an admin dashboard for managing users, ads, and reports, and a user dashboard for posting and managing listings.",
//       "Integrated secure authentication, ad posting workflow, and user verification via OTP.",
//     ],
//   },

//   {
//     title: "Front End Developer",
//     company: "Personal Project: Movie Search & Rating App (React.js + API)",
//     period: "Aug 2024 - Dec 2024",
//     description: [
//       "Built a movie search application in React.js using the usePopcorn API to fetch real-time movie data.",
//       "Implemented search functionality to find movies by title and display detailed information.",
//       "Added a favorites list feature, allowing users to save and manage their favorite movies.",
//       "Integrated a custom star rating system (1–10) so users can rate movies directly in the app.",
//       "Designed a responsive, mobile-friendly UI with Tailwind CSS for a smooth user experience.",
//       "Used React hooks and state management to handle API calls, loading states, and user interactions efficiently.",
//     ],
//   },
//   {
//     title: "Laravel Developer",
//     company: "Personal Project: MIS for Undergraduate Students",
//     period: "Jun 2024 - Jul-2024",
//     description: [
//       "Built a role-based MIS system in Laravel for students, teachers, and administrators.",
//       "Implemented secure student–teacher assignment workflow, allowing students to choose a supervisor and submit final monographs.",
//       "Developed a teacher dashboard to review, accept, or reject submissions with feedback.",
//       "Created an admin panel for managing users, monographs, and system settings.",
//       "Integrated authentication, access control, and file upload handling for large PDF monographs.",
//       "Ensured clean database structure in MySQL for efficient querying and reporting.",
//     ],
//   },
// ];

// export default function Experience() {
//   return (
//     <section className="section" id="experience">
//       <div className="container">
//         <h2 className="headline-2 mb-8 reveal-up">Work Experience</h2>
//         <div className="space-y-6">
//           {experiences.map((exp, index) => (
//             <ExperienceCard key={index} exp={exp} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ExperienceCard({ exp }) {
//   const [showMore, setShowMore] = useState(false);

//   // ✅ Mobile: show 2 items if collapsed
//   // ✅ Desktop: always show all
//   const itemsToShow =
//     typeof window !== "undefined" && window.innerWidth >= 640
//       ? exp.description.length // desktop (sm and up)
//       : showMore
//       ? exp.description.length // mobile expanded
//       : 2; // mobile collapsed

//   return (
//     <div className="text-white rounded-lg shadow p-6 ring-inset ring-1 ring-zinc-50/10 cursor-pointer bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 hover:shadow-md hover:shadow-cyan-500 duration-300">
//       <h3 className="text-xl font-semibold">{exp.title}</h3>
//       <p className="text-sm text-gray-100">
//         {exp.company} {exp.period && `| ${exp.period}`}
//       </p>

//       <ul className="mt-3 list-disc list-inside space-y-1 text-gray-200">
//         {exp.description.slice(0, itemsToShow).map((item, i) => (
//           <li className="ml-5" key={i}>
//             {item}
//           </li>
//         ))}
//       </ul>

//       {/* ✅ Only show toggle button on mobile */}
//       {exp.description.length > 2 && (
//         <button
//           className="mt-3 text-sm text-sky-400 cursor-pointer hover:underline block sm:hidden"
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? "Show less" : "Show more"}
//         </button>
//       )}
//     </div>
//   );
// }

// // ✅ Add PropTypes validation
// ExperienceCard.propTypes = {
//   exp: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     company: PropTypes.string.isRequired,
//     period: PropTypes.string,
//     description: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };

import { useState } from "react";
import PropTypes from "prop-types";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Imperial Exclusive - E-commerce Payment System",
    period: "Nov 2025 - Dec 2025",
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
    title: "Full Stack Developer",
    company: "Afghan Local Marketplace (OLX-style Platform)",
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
    title: "Full Stack Developer",
    company: "E-commerce Platform (MERN + Redux)",
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
    title: "Full Stack Developer",
    company: "Personal Project: Management Information Systems (MIS) Course",
    period: "Self-Directed Study | 2024",
    description: [
      "Completed intensive self-directed MIS course covering systems analysis, database design, and IT strategy",
      "Designed relational database schemas using Entity-Relationship Diagrams (ERDs) and normalization",
      "Developed SQL queries for data creation, retrieval, updating, and business reporting",
      "Analyzed business processes and proposed systems solutions evaluating requirements and stakeholders",
      "Researched enterprise systems (ERP/CRM), data analytics trends, and IT infrastructure (cloud vs on-premise)",
      "Applied MIS principles to align IT capabilities with business objectives for efficiency and innovation",
    ],
    tech: "SQL, Database Design, Systems Analysis, Business Process Modeling, ERD",
  },
  {
    title: "Front End Developer",
    company: "Movie Search & Rating App (React.js + API)",
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
  {
    title: "Laravel Developer",
    company: "Personal Project: MIS for Undergraduate Students",
    period: "Jun 2024 - Jul 2024",
    description: [
      "Built role-based MIS system in Laravel for students, teachers, and administrators",
      "Implemented secure student-teacher assignment workflow for monograph supervision",
      "Developed teacher dashboard for reviewing, accepting, or rejecting submissions with feedback",
      "Created admin panel for managing users, monographs, and system settings",
      "Integrated authentication, access control, and file upload handling for PDF monographs",
      "Designed clean MySQL database structure for efficient querying and reporting",
    ],
    tech: "Laravel, MySQL, Authentication, File Upload, Role-Based Access",
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
          <p className="text-sm text-gray-100 mt-1">
            {exp.company} {exp.period && `| ${exp.period}`}
          </p>
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
