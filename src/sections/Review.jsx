import { useRef } from "react";
import ReviewCard from "../components/ReviewCard";

// Node modules
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Dost Mohammad Fahimi",
    imgSrc: "/users/musa.jpg",
    company: "Kabul Polytichnec University",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Anwar Hussaini",
    imgSrc: "/users/anwar.jpg",
    company: "Freelancer",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Sayed Taqi",
    imgSrc: "/users/taqi.jpg",
    company: "CodeHub",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Sayed Shah Musa",
    imgSrc: "/users/dost1.jpg",
    company: "Kabul Polytichnec University",
  },
];

function Review() {
  const sliderRef = useRef(null);

  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 90%",
        scrub: true,
      },
      x: "-500",
    });
  });

  // click handlers for arrows
  const handleSlide = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".review-card");
    if (!card) return;

    const slideWidth = card.offsetWidth + 12; // card width + gap
    const visibleWidth = container.parentElement.offsetWidth;
    const totalWidth = container.scrollWidth;

    // how much is already moved
    const currentX = gsap.getProperty(container, "x") || 0;

    let newX =
      direction === "left" ? currentX + slideWidth : currentX - slideWidth;

    // limit sliding: prevent overflow
    const maxLeft = 0;
    const maxRight = -(totalWidth - visibleWidth);

    if (newX > maxLeft) newX = maxLeft;
    if (newX < maxRight) newX = maxRight;

    gsap.to(container, {
      x: newX,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <section id="reviews" className="section overflow-hidden relative">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>

        <div className="relative">
          {/* Slider Row */}
          <div
            ref={sliderRef}
            className="scrub-slide flex items-stretch gap-3 w-fit"
          >
            {reviews.map(({ content, name, imgSrc, company }, key) => (
              <div key={key} className="review-card">
                <ReviewCard
                  content={content}
                  name={name}
                  imgSrc={imgSrc}
                  company={company}
                />
              </div>
            ))}
          </div>

          {/* Left / Right arrows */}
          <button
            onClick={() => handleSlide("left")}
            className=" mx-5 md:mx-0 absolute cursor-pointer top-1/2 -left-6 -translate-y-1/2 bg-zinc-700/80 hover:bg-zinc-600 p-3 rounded-full shadow-md"
          >
            <FiChevronLeft className="text-2xl text-white" />
          </button>

          <button
            onClick={() => handleSlide("right")}
            className="absolute mx-5 md:mx-0 cursor-pointer top-1/2 -right-6 -translate-y-1/2 bg-zinc-700/80 hover:bg-zinc-600 p-3 rounded-full shadow-md"
          >
            <FiChevronRight className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Review;
