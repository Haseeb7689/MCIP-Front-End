"use client";
import { useEffect, useRef, useState } from "react";
import { useL } from "@/context/LanguageContext";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Shield,
  ChevronDown,
  Home,
  TrendingUp,
  FileCheck,
  AlertTriangle,
  Calculator,
  Building,
} from "lucide-react";

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  startAnimation = false,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  startAnimation: boolean;
}) => {
  const [count, setCount] = useState(0);
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
  }, [target, duration, startAnimation]);
  return (
    <span>
      {prefix} {count} {suffix}
    </span>
  );
};

export default function REGuide() {
  const { t } = useL();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const steps = [
    {
      title: t("step1Title"),
      desc: t("step1Desc"),
      icon: <MapPin className="w-8 h-8 text-emerald-500 shrink-0" />,
      color: "emerald",
      details: {
        keyPoints: [
          t("keyPoint1"),
          t("keyPoint2"),
          t("keyPoint3"),
          t("keyPoint4"),
        ],
        riskFactors: [t("risk1"), t("risk2"), t("risk3")],
      },
      graph: (
        <div className="h-40 w-full bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl relative overflow-hidden border border-emerald-200 dark:border-emerald-700">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="60" cy="40" r="6" className="fill-emerald-500" />
            <circle cx="120" cy="80" r="6" className="fill-emerald-600" />
            <circle cx="180" cy="60" r="6" className="fill-emerald-500" />
            <circle cx="240" cy="100" r="6" className="fill-emerald-400" />

            <path
              d="M60 40 Q90 60 120 80 Q150 70 180 60 Q210 80 240 100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-emerald-400"
              strokeDasharray="5,5"
            />

            <rect
              x="20"
              y="120"
              width="40"
              height="15"
              rx="3"
              className="fill-emerald-300 opacity-60"
            />
            <rect
              x="80"
              y="120"
              width="50"
              height="15"
              rx="3"
              className="fill-emerald-400 opacity-60"
            />
            <rect
              x="150"
              y="120"
              width="45"
              height="15"
              rx="3"
              className="fill-emerald-500 opacity-60"
            />
            <rect
              x="220"
              y="120"
              width="55"
              height="15"
              rx="3"
              className="fill-emerald-600 opacity-60"
            />

            <text
              x="25"
              y="150"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300"
            >
              {t("visualResidential")}
            </text>
            <text
              x="85"
              y="150"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300"
            >
              {t("visualCommercial")}
            </text>
            <text
              x="155"
              y="150"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300"
            >
              {t("visualMixed")}
            </text>
            <text
              x="225"
              y="150"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300"
            >
              {t("visualIndustrial")}
            </text>
          </svg>
        </div>
      ),
    },
    {
      title: t("step2_title"),
      desc: t("step2_desc"),
      icon: <Clock className="w-8 h-8 text-blue-500 shrink-0" />,
      color: "blue",
      details: {
        keyPoints: [
          t("step2_keypoint1"),
          t("step2_keypoint2"),
          t("step2_keypoint3"),
          t("step2_keypoint4"),
        ],
        riskFactors: [t("step2_risk1"), t("step2_risk2"), t("step2_risk3")],
      },
      graph: (
        <div className="h-40 w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl relative overflow-hidden border border-blue-200 dark:border-blue-700">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M20 120 Q80 80 140 100 Q200 60 280 90"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-blue-500"
            />
            <line
              x1="80"
              y1="20"
              x2="80"
              y2="140"
              stroke="currentColor"
              className="text-blue-300"
              strokeDasharray="3,3"
              strokeWidth="1"
            />
            <line
              x1="140"
              y1="20"
              x2="140"
              y2="140"
              stroke="currentColor"
              className="text-blue-300"
              strokeDasharray="3,3"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="20"
              x2="200"
              y2="140"
              stroke="currentColor"
              className="text-blue-300"
              strokeDasharray="3,3"
              strokeWidth="1"
            />

            <text
              x="50"
              y="150"
              className="text-[10px] sm:text-xs fill-blue-700 dark:fill-blue-300"
            >
              {t("step2_graph_year1")}
            </text>
            <text
              x="110"
              y="150"
              className="text-[10px] sm:text-xs fill-blue-700 dark:fill-blue-300"
            >
              {t("step2_graph_year2")}
            </text>
            <text
              x="170"
              y="150"
              className="text-[10px] sm:text-xs fill-blue-700 dark:fill-blue-300"
            >
              {t("step2_graph_year3")}
            </text>

            <circle cx="80" cy="80" r="4" className="fill-blue-400" />
            <circle cx="140" cy="100" r="4" className="fill-blue-500" />
            <circle cx="200" cy="60" r="4" className="fill-blue-600" />

            <text
              x="20"
              y="35"
              className="text-xs sm:text-sm font-semibold fill-blue-700 dark:fill-blue-300"
            >
              {t("step2_graph_marketvalue")}
            </text>
          </svg>
        </div>
      ),
    },
    {
      title: t("step3_title"),
      desc: t("step3_desc"),
      icon: <Shield className="w-8 h-8 text-purple-500 shrink-0" />,
      color: "purple",
      details: {
        keyPoints: [
          t("step3_keypoint1"),
          t("step3_keypoint2"),
          t("step3_keypoint3"),
          t("step3_keypoint4"),
        ],
        riskFactors: [t("step3_risk1"), t("step3_risk2"), t("step3_risk3")],
      },
      graph: (
        <div className="h-40 w-full bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl relative overflow-hidden border border-purple-200 dark:border-purple-700">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(150, 80)">
              <path
                d="M0,-40 A40,40 0 0,1 28,-28 L0,0 Z"
                className="fill-purple-400"
              />
              <path
                d="M28,-28 A40,40 0 0,1 40,0 L0,0 Z"
                className="fill-purple-500"
              />
              <path
                d="M40,0 A40,40 0 0,1 0,40 L0,0 Z"
                className="fill-purple-600"
              />
              <path
                d="M0,40 A40,40 0 1,1 0,-40 L0,0 Z"
                className="fill-purple-300"
              />
            </g>

            <rect
              x="20"
              y="20"
              width="12"
              height="8"
              className="fill-purple-600"
            />
            <text
              x="35"
              y="27"
              className="text-[10px] sm:text-xs fill-purple-700 dark:fill-purple-300"
            >
              {t("step3_graph_portfolio1")}
            </text>

            <rect
              x="20"
              y="35"
              width="12"
              height="8"
              className="fill-purple-500"
            />
            <text
              x="35"
              y="42"
              className="text-[10px] sm:text-xs fill-purple-700 dark:fill-purple-300"
            >
              {t("step3_graph_portfolio2")}
            </text>

            <rect
              x="20"
              y="50"
              width="12"
              height="8"
              className="fill-purple-400"
            />
            <text
              x="35"
              y="57"
              className="text-[10px] sm:text-xs fill-purple-700 dark:fill-purple-300"
            >
              {t("step3_graph_portfolio3")}
            </text>

            <rect
              x="20"
              y="65"
              width="12"
              height="8"
              className="fill-purple-300"
            />
            <text
              x="35"
              y="72"
              className="text-[10px] sm:text-xs fill-purple-700 dark:fill-purple-300"
            >
              {t("step3_graph_portfolio4")}
            </text>

            <text
              x="130"
              y="140"
              className="text-xs sm:text-sm font-semibold fill-purple-700 dark:fill-purple-300"
            >
              {t("step3_graph_title")}
            </text>
          </svg>
        </div>
      ),
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickStats = [
    {
      icon: Home,
      label: t("realEstateStatOptions"),
      value: "10+",
      numericValue: 10,
      suffix: "+",
      color: "text-emerald-600",
    },
    {
      icon: TrendingUp,
      label: t("realEstateStatReturns"),
      value: "12-18%",
      numericValue: 18,
      suffix: "%",
      prefix: "12-",
      color: "text-blue-600",
    },
    {
      icon: FileCheck,
      label: t("realEstateStatChecks"),
      value: "25+",
      numericValue: 25,
      suffix: "+",
      color: "text-purple-600",
    },
    {
      icon: Calculator,
      label: t("realEstateStatInvestment"),
      value: "5L+",
      numericValue: 5,
      suffix: "L+",
      color: "text-orange-600",
    },
  ];

  return (
    <article className="mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-gradient-to-br from-green-50 via-green to-green-200 rounded-3xl dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <motion.header
        className="relative text-center py-12 sm:py-16 px-4 sm:px-8 rounded-3xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <Building className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {t("realEstateGuideTitle")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed text-justify">
            {t("realEstateGuideSubtitle")} {t("realEstateNoShortcut")}
          </p>
        </div>

        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
      </motion.header>

      <motion.div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {quickStats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <stat.icon
                className={`w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2 sm:mb-3 ${stat.color}`}
              />
            </motion.div>

            <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              <AnimatedCounter
                target={stat.numericValue}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2000 + idx * 200}
                startAnimation={isInView}
              />
            </div>

            <motion.div
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 + 0.5 }}
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Warning Banner */}
      <motion.div
        className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-400 p-4 sm:p-6 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-1 sm:mb-2 text-sm sm:text-base">
              {t("realEstateStatWarningHead")}
            </h3>
            <p className="text-xs sm:text-sm text-orange-700 dark:text-orange-400">
              {t("realEstateStatWarning")}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          {t("realEstateStepsHeading")}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step: any, idx: number) => {
            const isOpen = openIndex === idx;
            const colorClasses = {
              emerald:
                "border-emerald-200 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-900/10",
              blue: "border-blue-200 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10",
              purple:
                "border-purple-200 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-900/10",
            };

            return (
              <motion.div
                key={idx}
                className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg border-2 will-change-transform ${
                  colorClasses[step.color as keyof typeof colorClasses]
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="p-2 sm:p-3 rounded-2xl bg-white dark:bg-gray-600 shadow-md">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="relative z-100 p-4 sm:p-5 min-w-[50px] min-h-[50px] rounded-full bg-white dark:bg-gray-600 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-visible"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h4 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                              Key Points
                            </h4>
                            <ul className="space-y-2">
                              {step.details.keyPoints.map(
                                (point: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex pl-1 items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                                  >
                                    <span className="relative flex w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0">
                                      <span className="absolute inline-flex h-full w-full rounded-full opacity-50 animate-ping bg-green-500"></span>
                                      <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
                                    </span>
                                    {point}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                              Risk Factors
                            </h4>
                            <ul className="space-y-2">
                              {step.details.riskFactors.map(
                                (risk: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex pl-1 items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                                  >
                                    <span className="relative flex w-2 h-2 sm:w-3 sm:h-3 mt-2 flex-shrink-0">
                                      <span className="absolute inline-flex h-full w-full rounded-full opacity-50 animate-ping bg-red-500"></span>
                                      <span className="relative inline-flex h-full w-full rounded-full bg-red-500"></span>
                                    </span>
                                    {risk}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3 sm:mb-4">
                            Visual Analysis
                          </h4>
                          {step.graph}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        className="text-center py-8 sm:py-12 px-4 sm:px-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
          {t("realEstateJourney_title")}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
          {t("realEstateJourney_desc")}
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <div className="px-4 py-2 sm:px-6 sm:py-3 bg-emerald-600 rounded-full font-semibold text-sm sm:text-base">
            {t("realEstateJourney_btn1")}
          </div>
          <div className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 rounded-full font-semibold text-sm sm:text-base">
            {t("realEstateJourney_btn2")}
          </div>
          <div className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 rounded-full font-semibold text-sm sm:text-base">
            {t("realEstateJourney_btn3")}
          </div>
        </div>
      </motion.div>
    </article>
  );
}
