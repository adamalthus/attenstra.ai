import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import attenstraLogo from "../assets/Attenstra_Woirdmark_LightBlue_Stream_Transparent_Background.png";

const heroStatements = [
  "keeps what matters moving",
  "makes focus your advantage",
  "powers serious work",
  "works the way you do",
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroStatements.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubmitted(true);
    window.setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <div className="page">
      <main className="shell">
        <section className="hero-stack">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="intro"
          >
            <p className="intro-line">Intelligence that</p>
          </motion.div>

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
              In a world of fragmented attention
              <br />
              Make every second count
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="signup-wrap"
          >
            <form onSubmit={handleSubmit} className="signup">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                className="email-input"
              />
              <button type="submit" className="signup-button">
                {isSubmitted ? "Thank you!" : "Get updates"}
              </button>
            </form>

            {isSubmitted ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="signup-status"
              >
                We&apos;ll be in touch soon.
              </motion.p>
            ) : null}
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
