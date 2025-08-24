"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useL } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import SupportDropdown from "./SupportDropDown";
import Button from "./Button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href as any}
      onClick={onClick}
      className={`relative px-2 py-1 text-lg transition-colors ${
        active
          ? "text-[#29d897] font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-[#29d897]"
          : "text-gray-700 dark:text-gray-200 hover:text-[#29d897] dark:hover:text-[#29d897] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#29d897] after:transition-all after:duration-300"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const { t, toggle, locale } = useL();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full top-0 z-50 border-b border-gray-200 bg-white/70 dark:bg-neutral-950/70 dark:border-neutral-800 backdrop-blur-md transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 sm:py-6 md:py-7">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Brand Logo"
              width={40}
              height={40}
              className="sm:w-[50px] sm:h-[50px]"
              priority
            />
            <div className="flex flex-col leading-tight ml-2">
              <span className="text-black dark:text-white font-bold text-sm sm:text-md tracking-wide">
                CHOTA INVESTOR
              </span>
              <div className="flex flex-col items-center text-black dark:text-white text-[8px] sm:text-[10px] uppercase tracking-[1px] leading-tight">
                <span>SMALL INVESTORS</span>
                <span>COMMUNITY</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <NavLink href="/" label={t("home")} />
          <SupportDropdown t={t} />
          <NavLink href="/resources" label={t("resources")} />
          <NavLink href="/dashboard" label={t("dashboard")} />
          <NavLink href="/forum" label={t("forum")} />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ModeToggle />
          <Button
            onClick={toggle}
            className="text-sm xl:text-md font-bold !bg-white !text-black px-4 xl:px-6 py-1 border rounded-lg hover:border-blue-600 hover:rounded-lg transition-colors duration-200"
          >
            {locale === "en" ? "اردو" : "EN"}
          </Button>
          <Link href="/auth/login">
            <Button className="transition-transform hover:scale-[1.03] !bg-[#29d897] hover:bg-[#29d897] text-white px-4 py-2 text-sm">
              {t("login")}
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="!bg-[#29d897] hover:!bg-[#29d897] transition-transform hover:scale-[1.03] text-white px-4 py-2 text-sm">
              {t("signup")}
            </Button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 shadow-lg">
          <nav className="flex flex-col p-4 gap-3">
            <NavLink
              href="/"
              label={t("home")}
              onClick={() => setIsOpen(false)}
            />
            <SupportDropdown t={t} onClose={() => setIsOpen(false)} />
            <NavLink
              href="/resources"
              label={t("resources")}
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="/dashboard"
              label={t("dashboard")}
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              href="/forum"
              label={t("forum")}
              onClick={() => setIsOpen(false)}
            />

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-neutral-800">
              <Link href="/auth/login">
                <Button
                  className="w-full bg-[#ffc208] hover:bg-[#29d897] text-white transition-transform hover:scale-[1.02] py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t("login")}
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  className="w-full bg-[#ffc208] hover:bg-[#29d897] text-white transition-transform hover:scale-[1.02] py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t("signup")}
                </Button>
              </Link>

              <div className="flex items-center justify-between gap-3 mt-2">
                <Button
                  onClick={toggle}
                  className="flex-1 text-sm font-bold !bg-white !text-black px-4 py-2 border rounded-lg hover:border-blue-600 hover:rounded-lg transition-colors duration-200"
                >
                  {locale === "en" ? "اردو" : "EN"}
                </Button>
                <ModeToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
