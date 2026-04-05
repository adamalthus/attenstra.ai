import { useEffect, useState } from "react";
import { motion } from "motion/react";
import attenstraLogo from "../assets/Attenstra_Woirdmark_LightBlue_Stream_Transparent_Background.png";
import { AnimatedHeadline } from "./components/AnimatedHeadline";
import { BrandFooter } from "./components/BrandFooter";
import { SignupForm } from "./components/SignupForm";
import { homepageCopy, heroStatements } from "./content/homepage";
import { siteConfig } from "./config/site";

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
          <AnimatedHeadline
            currentIndex={currentIndex}
            statements={heroStatements}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subline-wrap"
          >
            <p className="subline">{homepageCopy.subline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SignupForm
              action={siteConfig.buttondownEndpoint}
              source={homepageCopy.sourceTag}
              tag={homepageCopy.buttondownTag}
              emailPlaceholder={homepageCopy.emailPlaceholder}
              ctaLabel={homepageCopy.ctaLabel}
            />
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BrandFooter src={attenstraLogo} alt="Attenstra" />
        </motion.div>
      </main>
    </div>
  );
}
