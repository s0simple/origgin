import React from "react";
import { motion } from "framer-motion";

const AnimatedSvgPaths = () => {
  const pathData =
    "M1 230.5L215.537 28.9048C216.175 28.3057 216.699 27.614 217.13 26.8526C228.77 6.29631 262.812 -20.6884 311.5 28C373.5 90 443 225 640 28";
  return (
    <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <motion.svg
          key={i}
          width="641"
          height="231"
          viewBox="0 0 641 231"
          fill="none"
          className="absolute"
          style={{
            top: `${(i + 1) * 15}%`,
            left: `${(i % 2) * 50}%`,
            transform: `scale(${1 - i * 0.1})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        >
          <motion.path
            d={pathData}
            stroke="#F0D8FC"
            strokeWidth="0.99"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default AnimatedSvgPaths;
