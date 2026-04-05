import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import attenstraLogo from "../assets/Attenstra_Woirdmark_LightBlue_Stream_Transparent_Background.png";

const heroStatements = [
  "Keep what matters moving.",
  "Make focus your advantage.",
  "Tools that work the way you do.",
];

const buttondownEndpoint =
  "https://buttondown.com/api/emails/embed-subscribe/attenstra";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroStatements.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <main className="shell">
        <section className="hero-stack">
          <div className="headline-frame">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="headline"
              >
                {heroStatements[currentIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subline-wrap"
          >
            <p className="subline">
              In a world of fragmented attention, make every second count.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="signup-wrap"
          >
            <form
              action={buttondownEndpoint}
              method="post"
              className="signup"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="email-input"
              />
              <input type="hidden" name="tag" value="attenstra-website" />
              <input
                type="hidden"
                name="metadata__source"
                value="attenstra.ai"
              />
              <input type="hidden" name="embed" value="1" />
              <button type="submit" className="signup-button">
                Get updates
              </button>
            </form>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="brand-footer"
        >
          <img src={attenstraLogo} alt="Attenstra" className="brand-logo" />
        </motion.div>
      </main>
    </div>
  );
}
