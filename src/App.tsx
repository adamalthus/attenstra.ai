import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import attenstraLogo from "../assets/Attenstra_Woirdmark_LightBlue_Stream_Transparent_Background.png";

const heroStatements = [
  "Keep what matters moving.",
  "Make focus your advantage.",
  "Complete what counts.",
  "Tools that work the way you do.",
];

const buttondownEndpoint =
  "https://buttondown.com/api/emails/embed-subscribe/attenstra";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroStatements.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Enter your email.");
      return;
    }

    const body = new URLSearchParams();
    body.set("email", email.trim());
    body.set("tag", "attenstra-website");
    body.set("metadata__source", "attenstra.ai");
    body.set("embed", "1");

    try {
      const response = await fetch(buttondownEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Buttondown returned ${response.status}`);
      }

      setIsSubmitted(true);
      setEmail("");
      window.setTimeout(() => setIsSubmitted(false), 3200);
    } catch {
      setErrorMessage("Subscription failed. Try again.");
    }
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
            <p className="intro-line">Attenstra</p>
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
              In a world of fragmented attention, make every second count.
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
            <p className="signup-note">Early updates on Attenstra. No noise.</p>
            <p className="signup-status" aria-live="polite">
              {errorMessage || (isSubmitted ? "We’ll be in touch soon." : "")}
            </p>
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
