import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionBox = motion.div;
export default function AnimatedCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </MotionBox>
  );
}
