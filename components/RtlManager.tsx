"use client";
import { useEffect } from "react";
import { useL } from "@/context/LanguageContext";

export default function RtlManager() {
  const { locale } = useL();

  useEffect(() => {
    const dir = locale === "ur" ? "rtl" : "ltr";
    const lang = locale === "ur" ? "ur" : "en";
    const root = document.documentElement;
    root.setAttribute("dir", dir);
    root.setAttribute("lang", lang);
    document.body.classList.toggle("rtl", dir === "rtl");
    document.body.classList.toggle("ltr", dir === "ltr");
  }, [locale]);

  return null;
}
