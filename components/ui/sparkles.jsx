"use client";
import { motion } from "framer-motion";

export function SparklesCore({
  background = "transparent",
  minSize = 1,
  maxSize = 4,
  particleDensity = 100,
  className,
}) {
  const particles = Array.from({ length: particleDensity });

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
      style={{ background }}
    >
      {particles.map((_, i) => {
        const size = Math.random() * (maxSize - minSize) + minSize;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: `${x}%`, y: `${y}%` }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: `${x}%`,
              y: `${y}%`,
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-white/80 shadow-md"
            style={{
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
}
