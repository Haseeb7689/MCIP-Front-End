"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Zap, Target, Leaf, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { useL } from "@/context/LanguageContext";

type SectionKey = "about" | "why" | "offer" | "vision" | "mission";

export default function AboutUs() {
  const { t } = useL();

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      about: false,
      why: false,
      offer: false,
      vision: false,
      mission: false,
    }
  );

  const toggleSection = (key: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const items: {
    key: SectionKey;
    title: string;
    description: string;
    content: string;
    icon: LucideIcon;
    color: string;
  }[] = [
    {
      key: "about",
      title: t("aboutHeroTitle"),
      description: t("aboutHeroDesc"),
      content: t("whyWeExistNote"),
      icon: Users,
      color: "#29d897",
    },
    {
      key: "why",
      title: t("whyWeExistTitle"),
      description: t("whyWeExistDesc"),
      content: t("whyWeExistNote"),
      icon: Zap,
      color: "#ffc208",
    },
    {
      key: "offer",
      title: t("whatWeOfferTitle"),
      description: t("whatWeOfferDesc"),
      content: `${t("offerPoint1")}\n${t("offerPoint2")}\n${t(
        "offerPoint3"
      )}\n${t("offerPoint4")}`,
      icon: Users,
      color: "#29d897",
    },
    {
      key: "vision",
      title: t("visionTitle"),
      description: t("visionSubtitle"),
      content: t("visionDesc"),
      icon: Target,
      color: "#ffc208",
    },
    {
      key: "mission",
      title: t("missionTitle"),
      description: t("missionSubtitle"),
      content: t("missionDesc"),
      icon: Leaf,
      color: "#29d897",
    },
  ];
  return (
    <div className="w-full mx-auto rounded-2xl p-4 sm:p-6 md:p-8 border bg-gradient-to-br from-[#29d897]/5 via-[#ffc208]/5 to-[#ff0476]/5 text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 shadow-xl transition-colors duration-300">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-[#29d897] via-[#ffc208] to-[#ff0476]">
        {t("about")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
        {items.map(
          ({ key, title, description, content, icon: Icon, color }) => (
            <div
              key={key}
              className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white dark:bg-gray-800/40 border border-transparent hover:border-gradient-to-r transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <Icon
                  className="w-8 h-8 sm:w-10 sm:h-10 transition-colors flex-shrink-0"
                  style={{ color: openSections[key] ? color : "#9CA3AF" }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-semibold text-base sm:text-lg transition-colors"
                      style={{ color: openSections[key] ? color : undefined }}
                    >
                      {title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => toggleSection(key)}
                      className="p-2 sm:p-2.5 rounded-full focus:outline-none cursor-pointer z-10"
                    >
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          openSections[key] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {description}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {openSections[key] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed pt-2 sm:pt-3 rounded-md p-2 sm:p-3 border-l-4 text-gray-900 dark:text-gray-100 whitespace-pre-line"
                      style={{
                        backgroundColor: `${color}10`,
                        borderLeftColor: color,
                      }}
                    >
                      {content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        )}
      </div>
    </div>
  );
}
