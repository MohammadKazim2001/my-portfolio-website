import { ButtonPrimary } from "../components/Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/MohammadKazim2001",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-kazim-amiri-111210323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Twitter X",
    href: "#",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mohammadkazim.amiri?igsh=YzljYTk1ODg3Zg==",
  },
];

function Footer() {
  return (
    <section id="footer" className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:mohammad.kazimamiri2001@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <div>
                <p className="mb-2 reveal-up">Sitmap</p>

                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm py-1 text-zinc-400 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div>
                <p className="mb-2 reveal-up">Socials</p>

                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm py-1 text-zinc-400 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <a href="/" className="logo reveal-up mb-12">
            <img src="/images/logo3.png" width={40} height={40} alt="logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up mb-12">
            &copy; 2025{" "}
            <span className="text-zinc-200">Mohammad Kazim Amiri</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
