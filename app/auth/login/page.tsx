"use client";
import { useL } from "@/context/LanguageContext";
import Input from "@/components/ui/Input";
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const { t } = useL();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mock login: UI only");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto my-24 space-y-6 p-6 rounded-2xl
             bg-gradient-to-br from-green-50 to-emerald-100
             dark:from-neutral-900 dark:to-gray-800
             shadow-md transition-all duration-300"
    >
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {t("login")}
      </h1>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t("email")}
        </label>
        <Input
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="you@example.com"
          className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
        />
      </div>

      <div className="flex flex-col relative">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t("password")}
        </label>
        <Input
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          required
          placeholder="••••••••"
          className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-11 -translate-y-1/2 flex items-center text-gray-500 dark:text-gray-400 hover:text-[#29d897] transition-colors duration-200"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full !bg-[#00ab6d] hover:!bg-[#29d897] text-white font-semibold py-2 rounded-lg
               transition-transform transform hover:scale-[1.03] duration-200"
      >
        {t("signIn")}
      </button>
    </form>
  );
}
