"use client";
import { useState } from "react";
import Button from "./Button";
import { useL } from "@/context/LanguageContext";

export default function OathModal({ onAccept }: { onAccept: () => void }) {
  const { t, locale } = useL();
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);

  if (!open) return null;

  const oathTextEn = `I confirm that I have genuinely invested in the stock, property, or project I am voting for. 
My opinion is based on personal experience and honest belief in its potential. 

I understand that this platform serves as a guide for the middle-class community, where individuals may rely on shared insights to make life-changing financial decisions—including the possible investment of their life savings. 

Therefore, I pledge to be truthful, responsible, and fair in my contributions, knowing that my input could impact someone else's financial future. 

I will not mislead, promote without basis, or hype any opportunity that I do not personally believe in or have experience with.`;

  const oathTextUr = `میں تصدیق کرتا/کرتی ہوں کہ میں نے حقیقتاً 
اسٹاک، پراپرٹی یا پروجیکٹ میں سرمایہ کاری کی ہے 
جس کے لیے میں ووٹ دے رہا/رہی ہوں۔ میری رائے میرے ذاتی تجربے 
اور اس کی ممکنہ کامیابی پر سچے یقین پر مبنی ہے۔ 

میں سمجھتا/سمجھتی ہوں کہ یہ پلیٹ فارم 
مڈل کلاس کمیونٹی کے لیے رہنمائی فراہم کرتا ہے، جہاں افراد اپنی زندگی کی بچت پر مبنی 
اہم مالی فیصلے کرنے کے لیے شیئر کردہ بصیرت پر انحصار کرتے ہیں۔ 

لہٰذا، میں وعدہ کرتا/کرتی ہوں کہ اپنی رائے میں 
سچائی، ذمہ داری اور انصاف سے کام لوں گا/گی، 
یہ جانتے ہوئے کہ میری رائے کسی اور کے مالی مستقبل پر اثر ڈال سکتی ہے۔ 

میں کسی کو گمراہ نہیں کروں گا/گی، بغیر بنیاد کے پروموٹ نہیں کروں گا/گی، 
اور نہ ہی کسی ایسے موقع کو بڑھا چڑھا کر پیش کروں گا/گی 
جس پر میرا ذاتی یقین یا تجربہ نہ ہو۔`;

  const oathText = locale === "en" ? oathTextEn : oathTextUr;
  const previewText = oathText.split(" ").slice(0, 35).join(" ") + "...";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-w-2xl w-full rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl overflow-y-auto max-h-[90vh]">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
          {t("oathTitle")}
        </h3>

        <p className={`text-sm sm:text-base mb-4 leading-relaxed whitespace-pre-line ${locale === "ur" ? "text-right font-[Jameel Noori Nastaleeq]" : "text-justify text-gray-700 dark:text-gray-300"}`}>
          {expanded ? oathText : previewText}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline mb-6 transition-colors"
        >
          {expanded ? (locale === "en" ? "Read Less" : "کم پڑھیں") : (locale === "en" ? "Read More" : "مزید پڑھیں")}
        </button>

        <div className="flex justify-end">
          <Button
            onClick={() => {
              setOpen(false);
              onAccept();
            }}
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            {t("oathBtn")}
          </Button>
        </div>
      </div>
    </div>
  );
}
