"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useL } from "@/context/LanguageContext";
import { resources, usefulLinks } from "@/data/resources";

export default function ResourcesPage() {
  const { t } = useL();
  const [showUsefulLinks, setShowUsefulLinks] = useState(false);

  return (
    <section className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-[#29d897] dark:text-[#ffc208] mb-4">
        {t("resources")}
      </h1>

      <ul className="space-y-4">
        {resources.map((r) => (
          <li
            key={r.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-700
          p-4 bg-gradient-to-br from-[#29d897]/10 via-[#ffc208]/10 to-[#ff0476]/10
          dark:from-gray-900 dark:to-gray-800
          shadow-md transition-colors duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {t(r.titleKey)}
              </span>

              {r.type === "link" ? (
                <button
                  onClick={() => setShowUsefulLinks(!showUsefulLinks)}
                  className="text-[#29d897] dark:text-[#ffc208] font-semibold underline hover:text-[#ffc208] dark:hover:text-[#29d897] transition-colors duration-200"
                >
                  {t("open")}
                </button>
              ) : (
                <Link
                  href={r.href as any}
                  className="text-[#29d897] dark:text-[#ffc208] font-semibold underline hover:text-[#ffc208] dark:hover:text-[#29d897] transition-colors duration-200"
                  target="_blank"
                >
                  {t("open")}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>

      {showUsefulLinks && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-6 space-y-6"
        >
          {usefulLinks.map((section) => (
            <div key={section.categoryKey}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {t(section.categoryKey)}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="p-4 bg-white dark:bg-gray-900 border border-[#29d897] dark:border-[#29d897] rounded-xl shadow-md hover:shadow-lg hover:bg-[#ffc208]/10 dark:hover:bg-[#29d897]/20 transition-all duration-300 cursor-pointer text-gray-800 dark:text-gray-100"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {t(item.descKey)}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
