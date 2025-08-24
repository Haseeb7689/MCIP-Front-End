"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  TrendingUp,
  Shield,
  BookOpen,
  Users,
  ArrowUp,
} from "lucide-react";
import { useL } from "@/context/LanguageContext"; // 👈 language hook

export default function Footer() {
  const { t } = useL(); // 👈 translation function

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: t("stock_guide"), href: "#stock-guide", icon: TrendingUp },
    { name: t("real_estate"), href: "#real-estate", icon: MapPin },
    { name: t("risk_management"), href: "#risk", icon: Shield },
    { name: t("learning_resources"), href: "#resources", icon: BookOpen },
    { name: t("communityFooter"), href: "#community", icon: Users },
  ];

  const legalLinks = [
    { name: t("privacy_policy"), href: "#privacy" },
    { name: t("terms_service"), href: "#terms" },
    { name: t("cookie_policy"), href: "#cookies" },
    { name: t("Disclaimer"), href: "#disclaimer" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "support@middleclassguide.com",
      href: "mailto:support@middleclassguide.com",
    },
    { icon: Phone, text: "+92 300 1234567", href: "tel:+923001234567" },
    { icon: MapPin, text: "Islamabad, Pakistan", href: "#" },
  ];

  return (
    <footer className="w-full mt-auto bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-5 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-5 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-5 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {t("brand_title")}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-base">
                  {t("brand_desc")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center backdrop-blur-sm">
                  <div className="text-lg sm:text-xl md:text-xl font-bold text-emerald-400">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm md:text-sm text-gray-400">
                    {t("happy_investors")}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center backdrop-blur-sm">
                  <div className="text-lg sm:text-xl md:text-xl font-bold text-blue-400">
                    50Cr+
                  </div>
                  <div className="text-xs sm:text-sm md:text-sm text-gray-400">
                    {t("invested")}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-6 text-white">
                {t("investment_guides")}
              </h4>
              <ul className="space-y-3 sm:space-y-4 md:space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors duration-200 group text-sm sm:text-base md:text-base"
                    >
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform break-words">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-6 text-white">
                {t("contact_us")}
              </h4>
              <ul className="space-y-3 sm:space-y-4 md:space-y-4 mb-6 sm:mb-8 md:mb-8">
                {contactInfo.map((contact, idx) => (
                  <li key={idx}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group text-sm sm:text-base md:text-base break-words"
                    >
                      <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {contact.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-6 text-white">
                {t("legal_resources")}
              </h4>
              <ul className="space-y-3 sm:space-y-4 md:space-y-4 mb-6 sm:mb-8 md:mb-8">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 inline-block transform text-sm sm:text-base md:text-base break-words"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <motion.div
              className="text-center sm:text-left order-2 sm:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-2 text-xs sm:text-sm md:text-base">
                © {new Date().getFullYear()} {t("brand_title")}.{" "}
                {t("rights_reserved")}
              </p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">
                {t("risk_notice")}
              </p>
            </motion.div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`p-2 sm:p-3 bg-white/10 rounded-full ${social.color} transition-all duration-300 hover:bg-white/20 backdrop-blur-sm`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 hover:from-emerald-500/30 hover:to-blue-500/30 transition-all duration-300 backdrop-blur-sm order-1 sm:order-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm md:text-sm text-emerald-400 font-medium">
                {t("back_to_top")}
              </span>
            </motion.button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20 border-t border-red-500/20 py-3 sm:py-4 md:py-5">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm md:text-sm text-orange-200">
              <strong>{t("Disclaimer")}: </strong>
              {t("investment_disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
