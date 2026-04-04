import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

const heroStatements = [
  "In a world of fragmented attention, make every second count.",
  "Keep what matters moving.",
  "A new environment for serious work.",
  "Your tools should work the way you do.",
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
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Enter an email address.");
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
      <main className="hero-shell">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="brandline"
        >
          Attenstra.ai
        </motion.p>

        <section className="hero">
          <div className="hero-copy">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
                className="headline"
              >
                {heroStatements[currentIndex]}
              </motion.h1>
            </AnimatePresence>

            <div className="dots" aria-label="Hero statement selector">
              {heroStatements.map((statement, index) => (
                <button
                  key={statement}
                  type="button"
                  className={index === currentIndex ? "dot active" : "dot"}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show statement ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="signup"
          >
            <label className="signup-label" htmlFor="email">
              Sign up to be in the loop
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="signup-button">
              {isSubmitted ? "Thank you" : "Stay in the loop"}
            </button>
            <p className="signup-status" aria-live="polite">
              {errorMessage || (isSubmitted ? "We’ll be in touch soon." : "")}
            </p>
          </motion.form>
        </section>

        <footer className="footer">
          <a href="/privacy.html">Privacy</a>
          <a href="mailto:hello@attenstra.ai">hello@attenstra.ai</a>
        </footer>
      </main>
    </div>
  );
}
