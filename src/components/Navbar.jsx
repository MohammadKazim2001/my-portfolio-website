import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useScrollSpy from "./useScrollSpy";

function Navbar({ navOpen, setNavOpen }) {
  const activeBox = useRef(null);
  const navItems = [
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Skills", link: "#skill", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Education", link: "#education", className: "nav-link" },
    { label: "Experience", link: "#experience", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:!hidden" },
  ];

  // Get active section from scroll spy
  const activeId = useScrollSpy(navItems.map((item) => item.link));
  const activeLinkRef = useRef(null);

  // Update active box position when activeId changes
  useEffect(() => {
    if (!activeLinkRef.current || !activeBox.current) return;

    activeBox.current.style.top = activeLinkRef.current.offsetTop + "px";
    activeBox.current.style.left = activeLinkRef.current.offsetLeft + "px";
    activeBox.current.style.width = activeLinkRef.current.offsetWidth + "px";
    activeBox.current.style.height = activeLinkRef.current.offsetHeight + "px";
  }, [activeId]);

  const handleNavClick = (event) => {
    // Close mobile menu when a nav item is clicked (on mobile screens)
    if (window.innerWidth < 768) {
      setNavOpen(false);
    }

    // Smooth scroll to section
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => {
        const isActive = link === `#${activeId}`;
        return (
          <a
            href={link}
            key={key}
            ref={isActive ? activeLinkRef : null}
            className={`${className} ${isActive ? "active" : ""}`}
            onClick={handleNavClick}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};

export default Navbar;
