import ReviewCard from "../components/ReviewCard";

// Node modules
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// register the gsap hook to avoid React version discrepancies
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
    name: "Anwar Khan",
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
    name: "Dost Mohammad Fahimi",
    imgSrc: "/users/dost1.jpg",
    company: "Kabul Polytichnec University",
  },
];

function Review() {
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

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
