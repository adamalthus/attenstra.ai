import { AnimatePresence, motion } from "motion/react";

type AnimatedHeadlineProps = {
  currentIndex: number;
  statements: readonly string[];
};

export function AnimatedHeadline({
  currentIndex,
  statements,
}: AnimatedHeadlineProps) {
  return (
    <div className="headline-frame">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="headline"
        >
          {statements[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
