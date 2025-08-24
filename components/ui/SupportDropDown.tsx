"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SupportDropdown({
  t,
  onClose,
}: {
  t: (key: string) => string;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const isSupportActive =
    pathname.startsWith("/real-estate/community") ||
    pathname.startsWith("/stock/community");

  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`relative flex items-center gap-1 px-2 py-1 text-base sm:text-lg transition 
    ${
      isSupportActive
        ? "text-emerald-400 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-emerald-400"
        : "text-gray-700 dark:text-gray-200 hover:text-emerald-400 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-400 after:transition-all after:duration-300"
    }`}
      >
        <span>{t("support")}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        role="menu"
        className={`absolute left-0 top-10 w-60 bg-white dark:bg-neutral-900
          border border-gray-200 dark:border-neutral-800 rounded-lg shadow-lg z-50
          transition-opacity duration-200
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <Link
          href="/real-estate/community"
          role="menuitem"
          onClick={() => onClose?.()}
          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800
            ${
              pathname.startsWith("/real-estate/community")
                ? "text-blue-600 font-medium"
                : ""
            }
          `}
        >
          {t("realEstate")} {t("community")}
        </Link>

        <Link
          href="/stock/community"
          role="menuitem"
          onClick={() => onClose?.()}
          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800
            ${
              pathname.startsWith("/stock/community")
                ? "text-green-600 font-medium"
                : ""
            }
          `}
        >
          {t("stock")} {t("community")}
        </Link>
      </div>
    </div>
  );
}
