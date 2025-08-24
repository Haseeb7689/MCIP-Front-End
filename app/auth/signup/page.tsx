"use client";
import { useL } from "@/context/LanguageContext";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const { t } = useL();
  const [form, setForm] = useState({
    name: "",
    city: "",
    contact: "",
    whatsapp: "",
    category: "regular",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error(t("passwordsDoNotMatch"));
      return;
    }
    toast.success(t("mockSignup"));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto my-24 space-y-6 p-6 rounded-2xl
             bg-gradient-to-br from-green-50 to-emerald-100
             dark:from-neutral-900 dark:to-gray-800
             shadow-md transition-all duration-300"
    >
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {t("signup")}
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("name")}
          </label>
          <Input
            value={form.name}
            id="name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("city")}
          </label>
          <Input
            value={form.city}
            id="city"
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("contactNumber")}
          </label>
          <Input
            value={form.contact}
            id="contact"
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            required
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("whatsapp")}
          </label>
          <Input
            value={form.whatsapp}
            id="whatsapp"
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            required
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("category")}
          </label>
          <Select
            value={form.category}
            id="category"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
          >
            <option value="regular">{t("regularInvestor")}</option>
            <option value="dealer">{t("dealerBroker")}</option>
            <option value="enduser">{t("endUser")}</option>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("email")}
          </label>
          <Input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2"
          />
        </div>

        <div className="relative">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("password")}
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            value={form.password}
            id="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
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

        <div className="relative">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t("confirmPassword")}
          </label>
          <Input
            type={showConfirm ? "text" : "password"}
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            required
            className="border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#29d897] transition-all duration-200 rounded-lg p-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-2 top-11 -translate-y-1/2 flex items-center text-gray-500 dark:text-gray-400 hover:text-[#29d897] transition-colors duration-200"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full !bg-[#00ab6d] hover:!bg-[#29d897] text-white font-semibold py-2 rounded-lg
               transition-transform transform hover:scale-[1.03] duration-200"
      >
        {t("signup")}
      </Button>
    </form>
  );
}
