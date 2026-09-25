"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.25 });

  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.span style={{ scaleY }} />
    </div>
  );
}
