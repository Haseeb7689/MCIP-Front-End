"use client";
import { useEffect, useRef, useState } from "react";
import { useL } from "@/context/LanguageContext";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  DollarSign,
  ChartPie,
  ShieldCheck,
  ChevronDown,
  TrendingUp,
  AlertCircle,
  Target,
  BookOpen,
  Calculator,
  BarChart3,
  PieChart,
  Activity,
  Layers,
} from "lucide-react";
import AnimatedRiskLevels from "./AnimatedRiskLevels";
import AnimatedMarketStats from "./AnimatedMarketStats";

export default function StockGuide() {
  const { t } = useL();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const steps = [
    {
      title: t("stockGuideEssentialStep1_title"),
      desc: t("stockGuideEssentialStep1_desc"),
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />,
      color: "emerald",
      details: {
        keyPoints: [
          t("stockGuideEssentialStep1_keyPoint1"),
          t("stockGuideEssentialStep1_keyPoint2"),
          t("stockGuideEssentialStep1_keyPoint3"),
          t("stockGuideEssentialStep1_keyPoint4"),
        ],
        tips: [
          t("stockGuideEssentialStep1_tip1"),
          t("stockGuideEssentialStep1_tip2"),
          t("stockGuideEssentialStep1_tip3"),
        ],
        timeline: t("stockGuideEssentialStep1_timeline"),
      },
      graph: (
        <div className="w-full h-48 sm:h-40 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl relative overflow-hidden border border-emerald-200 dark:border-emerald-700">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M30 80 Q90 60 150 70 Q210 50 270 60"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-emerald-500"
            />
            <circle cx="30" cy="80" r="6" className="fill-emerald-600" />
            <circle cx="150" cy="70" r="6" className="fill-emerald-500" />
            <circle cx="270" cy="60" r="6" className="fill-emerald-400" />
            <text
              x="15"
              y="105"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300 font-semibold"
            >
              {t("stockGuideEssentialStep1_graphAccount")}
            </text>
            <text
              x="135"
              y="95"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300 font-semibold"
            >
              {t("stockGuideEssentialStep1_graphKYC")}
            </text>
            <text
              x="250"
              y="85"
              className="text-[10px] sm:text-xs fill-emerald-700 dark:fill-emerald-300 font-semibold"
            >
              {t("stockGuideEssentialStep1_graphTrading")}
            </text>
            <rect
              x="50"
              y="120"
              width="40"
              height="6"
              rx="3"
              className="fill-emerald-300"
            />
            <rect
              x="170"
              y="115"
              width="60"
              height="6"
              rx="3"
              className="fill-emerald-400"
            />
            <rect
              x="230"
              y="110"
              width="30"
              height="6"
              rx="3"
              className="fill-emerald-500"
            />
            <text
              x="20"
              y="145"
              className="text-[10px] sm:text-xs fill-emerald-600 dark:fill-emerald-400"
            >
              {t("stockGuideEssentialStep1_graphTimeline")}
            </text>
          </svg>
        </div>
      ),
    },
    {
      title: t("stockGuideEssentialStep2_title"),
      desc: t("stockGuideEssentialStep2_desc"),
      icon: <ChartPie className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      color: "blue",
      details: {
        keyPoints: [
          t("stockGuideEssentialStep2_keyPoint1"),
          t("stockGuideEssentialStep2_keyPoint2"),
          t("stockGuideEssentialStep2_keyPoint3"),
          t("stockGuideEssentialStep2_keyPoint4"),
          t("stockGuideEssentialStep2_keyPoint5"),
        ],
        tips: [
          t("stockGuideEssentialStep2_tip1"),
          t("stockGuideEssentialStep2_tip2"),
          t("stockGuideEssentialStep2_tip3"),
        ],
        timeline: t("stockGuideEssentialStep2_timeline"),
      },
      graph: (
        <div className="w-full h-48 sm:h-40 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl relative overflow-hidden border border-blue-200 dark:border-blue-700">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M20 120 L60 100 L100 110 L140 85 L180 75 L220 90 L260 70"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              className="text-blue-500"
            />
            <rect
              x="18"
              y="130"
              width="8"
              height="15"
              className="fill-blue-400 opacity-70"
            />
            <rect
              x="58"
              y="125"
              width="8"
              height="20"
              className="fill-blue-500 opacity-70"
            />
            <rect
              x="98"
              y="135"
              width="8"
              height="10"
              className="fill-blue-400 opacity-70"
            />
            <rect
              x="138"
              y="120"
              width="8"
              height="25"
              className="fill-blue-600 opacity-70"
            />
            <rect
              x="178"
              y="118"
              width="8"
              height="27"
              className="fill-blue-500 opacity-70"
            />
            <rect
              x="218"
              y="128"
              width="8"
              height="17"
              className="fill-blue-400 opacity-70"
            />
            <rect
              x="258"
              y="115"
              width="8"
              height="30"
              className="fill-blue-600 opacity-70"
            />
            <text
              x="20"
              y="25"
              className="text-[10px] sm:text-sm font-bold fill-blue-700 dark:fill-blue-300"
            >
              {t("stockGuideEssentialStep2_graphMarketAnalysis")}
            </text>
          </svg>
        </div>
      ),
    },
    {
      title: t("stockGuideEssentialStep3_title"),
      desc: t("stockGuideEssentialStep3_desc"),
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      color: "purple",
      details: {
        keyPoints: [
          t("stockGuideEssentialStep3_keyPoint1"),
          t("stockGuideEssentialStep3_keyPoint2"),
          t("stockGuideEssentialStep3_keyPoint3"),
        ],
        tips: [
          t("stockGuideEssentialStep3_tip1"),
          t("stockGuideEssentialStep3_tip2"),
          t("stockGuideEssentialStep3_tip3"),
        ],
        timeline: t("stockGuideEssentialStep3_timeline"),
      },
      graph: (
        <div className="w-full h-48 sm:h-40 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl relative overflow-hidden border border-purple-200 dark:border-purple-700">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 160"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(150, 70) scale(0.8)">
              <path
                d="M0,-35 A35,35 0 0,1 25,-25 L0,0 Z"
                className="fill-purple-500"
              />
              <path
                d="M25,-25 A35,35 0 0,1 35,0 L0,0 Z"
                className="fill-purple-400"
              />
              <path
                d="M35,0 A35,35 0 0,1 25,25 L0,0 Z"
                className="fill-purple-600"
              />
              <path
                d="M25,25 A35,35 0 0,1 -25,25 L0,0 Z"
                className="fill-purple-300"
              />
              <path
                d="M-25,25 A35,35 0 0,1 -35,0 L0,0 Z"
                className="fill-purple-500"
              />
              <path
                d="M-35,0 A35,35 0 1,1 0,-35 L0,0 Z"
                className="fill-purple-400"
              />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: t("stockGuideEssentialStep4_title"),
      desc: t("stockGuideEssentialStep4_desc"),
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />,
      color: "yellow",
      details: {
        keyPoints: [
          t("stockGuideEssentialStep4_keyPoint1"),
          t("stockGuideEssentialStep4_keyPoint2"),
          t("stockGuideEssentialStep4_keyPoint3"),
          t("stockGuideEssentialStep4_keyPoint4"),
          t("stockGuideEssentialStep4_keyPoint5"),
          t("stockGuideEssentialStep4_keyPoint6"),
          t("stockGuideEssentialStep4_keyPoint7"),
          t("stockGuideEssentialStep4_keyPoint8"),
          t("stockGuideEssentialStep4_keyPoint9"),
          t("stockGuideEssentialStep4_keyPoint10"),
        ],
        tips: [
          t("stockGuideEssentialStep4_tip1"),
          t("stockGuideEssentialStep4_tip2"),
          t("stockGuideEssentialStep4_tip3"),
        ],
        timeline: t("stockGuideEssentialStep4_timeline"),
      },
      graph: (
        <div className="w-full h-48 sm:h-60 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl relative overflow-hidden border border-yellow-200 dark:border-yellow-700 p-4">
          <svg viewBox="0 0 300 160" className="w-full h-full">
            {/* X Axis */}
            <line
              x1="30"
              y1="140"
              x2="280"
              y2="140"
              stroke="gray"
              strokeWidth="1"
            />
            <line
              x1="30"
              y1="20"
              x2="30"
              y2="140"
              stroke="gray"
              strokeWidth="1"
            />
            <rect
              x="50"
              y="80"
              width="30"
              height="60"
              className="fill-blue-500"
            />
            <text
              x="50"
              y="155"
              className="text-xs fill-gray-700 dark:fill-gray-300"
            >
              {t("stockGuideEssentialStep4_graphStock")}
            </text>

            <rect
              x="120"
              y="50"
              width="30"
              height="90"
              className="fill-green-500"
            />
            <text
              x="120"
              y="155"
              className="text-xs fill-gray-700 dark:fill-gray-300"
            >
              {t("stockGuideEssentialStep4_graphRealEstate")}
            </text>

            <circle cx="200" cy="30" r="6" className="fill-blue-500" />
            <text
              x="210"
              y="35"
              className="text-xs fill-gray-700 dark:fill-gray-300"
            >
              {t("stockGuideEssentialStep4_graphLegendStock")}
            </text>
            <circle cx="200" cy="50" r="6" className="fill-green-500" />
            <text
              x="210"
              y="55"
              className="text-xs fill-gray-700 dark:fill-gray-300"
            >
              {t("stockGuideEssentialStep4_graphLegendRealEstate")}
            </text>
          </svg>
        </div>
      ),
    },
  ];
  return (
    <article className="mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-gradient-to-br from-orange-50 via-orange to-orange-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen rounded-3xl">
      <motion.header
        className="relative text-center py-16 sm:py-20 px-4 sm:px-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {t("stockGuideTitle")}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            {t("stockGuideIntro")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono bg-black/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
            <span className="text-green-400">NIFTY +0.8%</span>
            <span className="text-red-400">SENSEX -0.2%</span>
            <span className="text-blue-400">BANK NIFTY +1.2%</span>
          </div>
        </div>

        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-28 sm:w-40 h-28 sm:h-40 bg-white/10 rounded-full blur-xl"></div>
      </motion.header>

      <AnimatedMarketStats />

      <AnimatedRiskLevels />

      <div className="space-y-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("stockGuideEssentialStepsTitle")}
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
            {t("stockGuideEssentialStepsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step: any, idx: number) => {
            const isOpen = openIndex === idx;
            const colorClasses = {
              emerald:
                "border-emerald-200 dark:border-emerald-700 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 dark:from-emerald-900/20 dark:to-emerald-800/10",
              blue: "border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/10",
              purple:
                "border-purple-200 dark:border-purple-700 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/10",
              yellow:
                "border-yellow-200 dark:border-yellow-700 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 dark:from-yellow-900/20 dark:to-yellow-800/10",
            };

            return (
              <motion.div
                key={idx}
                className={`relative p-6 sm:p-8 rounded-3xl shadow-xl cursor-pointer transition-all duration-500 border-2 ${
                  colorClasses[step.color as keyof typeof colorClasses]
                } hover:shadow-2xl backdrop-blur-sm`}
                whileHover={{ scale: 1.01, y: -5 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  {idx + 1}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-gray-600 shadow-lg">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="p-3 sm:p-4 rounded-full bg-white dark:bg-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-white transition-transform duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Timeline</span>
                    <span className="font-semibold">
                      {step.details.timeline}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        step.color === "emerald"
                          ? "bg-emerald-500"
                          : step.color === "blue"
                          ? "bg-blue-500"
                          : step.color === "purple"
                          ? "bg-purple-500"
                          : step.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      } transition-all duration-500`}
                      style={{ width: isOpen ? "100%" : "40%" }}
                    ></div>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="space-y-8">
                          <div>
                            <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                              Key Learning Points
                            </h4>
                            <ul className="space-y-3">
                              {step.details.keyPoints.map(
                                (point: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex pl-1 items-start gap-3 text-gray-700 dark:text-gray-300"
                                  >
                                    <span className="relative flex w-2 h-2 sm:w-3 sm:h-3 mt-2 flex-shrink-0">
                                      <span className="absolute inline-flex h-full w-full rounded-full opacity-50 animate-ping bg-green-500"></span>
                                      <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
                                    </span>
                                    <span className="leading-relaxed">
                                      {point}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                              Pro Tips
                            </h4>
                            <ul className="space-y-3">
                              {step.details.tips.map(
                                (tip: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex pl-1 items-start gap-3 text-gray-700 dark:text-gray-300"
                                  >
                                    <span className="relative flex w-2 h-2 sm:w-3 sm:h-3 mt-2 flex-shrink-0">
                                      <span className="absolute inline-flex h-full w-full rounded-full opacity-50 animate-ping bg-blue-500"></span>
                                      <span className="relative inline-flex h-full w-full rounded-full bg-blue-500"></span>
                                    </span>
                                    <span className="leading-relaxed">
                                      {tip}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                            Visual Analysis
                          </h4>
                          {step.graph}

                          <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                            <div className="text-gray-600 dark:text-gray-400">
                              <strong>Expected Timeline:</strong>{" "}
                              {step.details.timeline}
                            </div>
                          </div>
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
        className="text-center py-12 sm:py-16 px-4 sm:px-8 rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            {t("readyToStart")}
          </h3>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            {t("rememberNote")}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6 sm:mb-8">
            <div className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors">
              {t("startLearning")}
            </div>
            <div className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors">
              {t("practiceTrading")}
            </div>
            <div className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors">
              {t("manageRisk")}
            </div>
          </div>

          <div className="text-xs sm:text-sm text-gray-400 max-w-lg sm:max-w-2xl mx-auto">
            <strong>{t("disclaimer").split(":")[0]}:</strong>{" "}
            {t("disclaimer").split(":")[1]}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-28 sm:w-40 h-28 sm:h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </article>
  );
}
