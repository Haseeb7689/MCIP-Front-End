import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, BarChart3, Target, PieChart } from "lucide-react";
import { useL } from "@/context/LanguageContext";

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  startAnimation = false,
  format = "number",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  startAnimation: boolean;
  format?: string;
}) => {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutExpo * target);

      setCount(currentCount);

      if (format === "currency") {
        if (suffix === "L Cr") {
          setDisplayValue(`${currentCount}L Cr`);
        } else if (suffix === "K Cr") {
          setDisplayValue(`${currentCount}K Cr`);
        }
      } else if (format === "complex") {
        setDisplayValue(`${prefix}${currentCount}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${currentCount}${suffix}`);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);

        if (format === "currency") {
          if (suffix === "L Cr") {
            setDisplayValue(`${target}L Cr`);
          } else if (suffix === "K Cr") {
            setDisplayValue(`${target}K Cr`);
          }
        } else {
          setDisplayValue(`${prefix}${target}${suffix}`);
        }
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, startAnimation, format, prefix, suffix]);

  return <span>{displayValue}</span>;
};

const AnimatedMarketStats = () => {
  const ref = useRef(null);
  const { t } = useL();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marketStats = [
    {
      icon: TrendingUp,
      label: t("marketStats_label_marketCap"),
      value: "200L Cr",
      numericValue: 200,
      suffix: t("marketStats_suffix_lCr"),
      prefix: "",
      format: "currency",
      color: "text-emerald-600",
    },
    {
      icon: BarChart3,
      label: t("marketStats_label_dailyVolume"),
      value: "50K Cr",
      numericValue: 50,
      suffix: t("marketStats_suffix_kCr"),
      prefix: "",
      format: "currency",
      color: "text-blue-600",
    },
    {
      icon: Target,
      label: t("marketStats_label_listedStocks"),
      value: "5000+",
      numericValue: 5000,
      suffix: "+",
      prefix: "",
      format: "complex",
      color: "text-purple-600",
    },
    {
      icon: PieChart,
      label: t("marketStats_label_sectors"),
      value: "12",
      numericValue: 12,
      suffix: "",
      prefix: "",
      format: "number",
      color: "text-orange-600",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {marketStats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 0.6,
            delay: idx * 0.15,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.08,
            rotateY: 5,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: idx * 0.1 + 0.3,
              type: "spring",
              stiffness: 150,
            }}
          >
            <stat.icon
              className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
            />
          </motion.div>

          <motion.div
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 + 0.6 }}
          >
            <AnimatedCounter
              target={stat.numericValue}
              suffix={stat.suffix}
              prefix={stat.prefix}
              format={stat.format}
              duration={2500 + idx * 300}
              startAnimation={isInView}
            />
          </motion.div>

          <motion.div
            className="text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 + 0.8 }}
          >
            {stat.label}
          </motion.div>

          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${
                stat.color.includes("emerald")
                  ? "#10b981"
                  : stat.color.includes("blue")
                  ? "#3b82f6"
                  : stat.color.includes("purple")
                  ? "#8b5cf6"
                  : "#f59e0b"
              }20, transparent)`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedMarketStats;
