import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useL } from "@/context/LanguageContext";

const AnimatedProgressCircle = ({
  percentage,
  color,
  startAnimation = false,
}: {
  percentage: number;
  color: string;
  startAnimation: boolean;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const duration = 2000;
      const elapsed = Math.min((timestamp - startTime) / duration, 1);

      const easeOutExpo = 1 - Math.pow(2, -10 * elapsed);
      const currentProgress = Math.floor(easeOutExpo * percentage);

      setProgress(currentProgress);

      if (elapsed < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setProgress(percentage);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [percentage, startAnimation]);

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg className="transform -rotate-90 w-16 h-16">
        <circle
          cx="32"
          cy="32"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
        <motion.circle
          cx="32"
          cy="32"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={color.replace("bg-", "text-")}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {progress}%
        </span>
      </div>
    </div>
  );
};

const AnimatedPercentage = ({
  target,
  startAnimation = false,
}: {
  target: number;
  startAnimation: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);

      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutExpo * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, startAnimation]);

  return <span>{count}%</span>;
};

const AnimatedRiskLevels = () => {
  const ref = useRef(null);
  const { t } = useL();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const riskLevels = [
    {
      level: t("risk_level_conservative"),
      numericPercentage: 20,
      color: "bg-green-500",
      description: t("risk_description_conservative"),
    },
    {
      level: t("risk_level_moderate"),
      numericPercentage: 60,
      color: "bg-blue-500",
      description: t("risk_description_moderate"),
    },
    {
      level: t("risk_level_aggressive"),
      numericPercentage: 20,
      color: "bg-red-500",
      description: t("risk_description_aggressive"),
    },
  ];
  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-400 p-6 sm:p-8 rounded-xl relative overflow-hidden"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-400 rounded-full blur-2xl" />
      </motion.div>

      <div className="relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 150,
            }}
          >
            <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-800 dark:text-yellow-300">
            {t("risk_title")}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskLevels.map((risk, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + idx * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${
                    risk.color === "bg-green-500"
                      ? "#10b981"
                      : risk.color === "bg-blue-500"
                      ? "#3b82f6"
                      : "#ef4444"
                  }20, transparent)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <motion.span
                    className={`relative flex w-3 h-3 sm:w-4 sm:h-4 rounded-full ${risk.color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                  >
                    <motion.span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-50 ${risk.color}`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                    <span
                      className={`relative inline-flex h-full w-full rounded-full ${risk.color}`}
                    />
                  </motion.span>

                  <motion.span
                    className="font-semibold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  >
                    {risk.level}
                  </motion.span>

                  <motion.span
                    className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-gray-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.4 + idx * 0.1,
                      type: "spring",
                      stiffness: 150,
                    }}
                  >
                    <AnimatedPercentage
                      target={risk.numericPercentage}
                      startAnimation={isInView}
                    />
                  </motion.span>
                </div>

                <motion.div
                  className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + idx * 0.1 }}
                >
                  <motion.div
                    className={`h-2 rounded-full ${risk.color}`}
                    initial={{ width: "0%" }}
                    animate={{
                      width: isInView ? `${risk.numericPercentage}%` : "0%",
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.8 + idx * 0.2,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                <motion.p
                  className="text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 + idx * 0.1 }}
                >
                  {risk.description}
                </motion.p>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/30 rounded-xl transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedRiskLevels;
