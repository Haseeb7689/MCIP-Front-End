"use client";
import {
  Check,
  Building2,
  LineChart,
  Landmark,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import AboutPage from "./about/page";
import REGuide from "./real-estate/guide/page";
import StockGuide from "./stock/guide/page";
import { useL } from "@/context/LanguageContext";
import { useRef } from "react";

export default function HeroSectionPage() {
  const { t } = useL();
  const aboutRef = useRef<HTMLDivElement>(null);

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  const scrollToAbout = () => {
    const navbarHeight = 128;
    const element = aboutRef.current;
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const cards = [
    {
      title: `${t("realEstate")} ${t("guide")}`,
      desc: t("realEstateGuideIntro"),
      link: "/real-estate/guide",
      icon: (
        <Building2 className="w-14 h-14 text-[#29d897] transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff0476]" />
      ),
    },
    {
      title: `${t("stock")} ${t("guide")}`,
      desc: t("stockGuideIntro"),
      link: "/stock/guide",
      icon: (
        <LineChart className="w-14 h-14 text-[#ff0476] transition-all duration-300 group-hover:scale-110 group-hover:text-[#29d897]" />
      ),
    },
    {
      title: t("dashboard"),
      desc: t("dashboardCardBody"),
      link: "/dashboard",
      icon: (
        <LayoutDashboard className="w-14 h-14 text-[#ffc208] transition-all duration-300 group-hover:scale-110 group-hover:text-[#29d897]" />
      ),
    },
  ];

  return (
    <main className="min-h-screen space-y-8 bg-background py-4">
      <section className="relative w-full min-h-[66vh] md:min-h-[72vh] lg:min-h-[86vh] flex items-start overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-700/60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        <div className="relative z-30 w-full px-5 sm:px-8 lg:px-16 pt-14 sm:pt-24 md:pt-28 pb-6 md:pb-8">
          <div className="max-w-3xl md:max-w-5xl xl:max-w-6xl text-left space-y-8">
            <Typography
              as="h1"
              variant="5xl/medium"
              className="text-white drop-shadow-lg font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight mb-2"
            >
              {t("renovateTitle")}
            </Typography>

            <Typography
              as="h2"
              variant="xl/normal"
              className="text-white/90 text-base sm:text-xl md:text-2xl leading-relaxed max-w-3xl md:max-w-5xl"
            >
              {t("renovateSubtitle")}
            </Typography>
            <Button
              size="default"
              className="!bg-[#29d897] hover:!bg-[#ff0476] text-white w-full sm:w-auto z-40 px-6 py-3 text-base sm:text-lg mt-6"
              onClick={scrollToAbout}
            >
              <span className="relative mr-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
              </span>
              {t("about")}
            </Button>

            <ul className="space-y-3 text-sm leading-relaxed sm:text-base text-white/85 mt-8">
              {features.map((featureKey, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-2 justify-start"
                >
                  <Badge className="rounded-md p-1.5 bg-white/20 dark:bg-gray-700">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </Badge>
                  <span>{t(featureKey as any)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full relative z-20">
        <div className="relative rounded-3xl overflow-visible bg-gradient-to-r from-[#29d897]/80 via-[#20c997]/80 to-[#0dcaf0]/80 text-white p-6 sm:p-8 md:p-14 mb-12 backdrop-blur-sm w-full">
          <div className="absolute inset-0 bg-black/30 rounded-3xl pointer-events-none"></div>

          <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-8 px-2 sm:px-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
                {t("heroTitle")}
              </h1>
              <p className="text-sm sm:text-base md:text-lg opacity-95 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
                {t("heroSubtitle")}
              </p>
              <Link href="/real-estate/guide">
                <Button className="px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold bg-gradient-to-r from-[#29d897] to-[#20c997] hover:from-[#20c997] hover:to-[#0dcaf0] shadow-lg hover:shadow-xl transition-all duration-300  text-white cursor-pointer z-40">
                  {t("getStarted")}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-white">
              <div className="bg-white/10 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition">
                <Building2 size={40} className="sm:w-12 sm:h-12" />
                <span className="mt-2 text-xs sm:text-sm">Real Estate</span>
              </div>
              <div className="bg-white/10 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition">
                <LineChart size={40} className="sm:w-12 sm:h-12" />
                <span className="mt-2 text-xs sm:text-sm">Stocks</span>
              </div>
              <div className="bg-white/10 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition">
                <Landmark size={40} className="sm:w-12 sm:h-12" />
                <span className="mt-2 text-xs sm:text-sm">Banking</span>
              </div>
              <div className="bg-white/10 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition">
                <BarChart3 size={40} className="sm:w-12 sm:h-12" />
                <span className="mt-2 text-xs sm:text-sm">Insights</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-10 w-full mx-auto">
          <div ref={aboutRef}>
            <AboutPage />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="relative rounded-2xl p-[2px] group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#29d897] via-[#ff0476] to-[#ffc208] animate-gradient-x pointer-events-none"></div>

                <div className="relative flex flex-col items-center text-center rounded-2xl p-6 sm:p-8 h-full bg-white border border-transparent group-hover:border-white dark:bg-gray-900 dark:text-gray-100 transition-all duration-300 z-30">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="font-semibold mb-2 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-105">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm mb-4 opacity-80 leading-relaxed">
                    {card.desc}
                  </p>

                  <Link
                    href={card.link as any}
                    className="inline-flex items-center gap-1 text-[#ff0476] hover:text-[#29d897] dark:text-[#ffc208] dark:hover:text-[#29d897] text-sm sm:text-base z-40"
                  >
                    {t("open") || "Open"}
                    <span className="inline-block transition-transform duration-300 ease-in-out hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-visible relative z-30">
            <REGuide />
          </div>

          <div className="overflow-visible relative z-30">
            <StockGuide />
          </div>
        </div>
      </section>
    </main>
  );
}
