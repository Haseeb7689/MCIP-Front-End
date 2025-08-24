"use client";
import { useMemo, useState } from "react";
import { dashboardEntries, Entry } from "@/data/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import { useL } from "@/context/LanguageContext";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { ChevronDown, Bell, TrendingUp, Shield, Users } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const { t } = useL();
  const [tab, setTab] = useState<"real-estate" | "stock">("real-estate");
  const [filter, setFilter] = useState<"profit" | "loss" | "recent">("recent");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filtered = useMemo(() => {
    let base = dashboardEntries.filter((e) => e.type === tab);
    if (search.trim())
      base = base.filter(
        (e) =>
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          (e.city && e.city.toLowerCase().includes(search.toLowerCase()))
      );
    if (filter === "profit")
      return [...base].sort((a, b) => b.profitPercent - a.profitPercent);
    if (filter === "loss")
      return [...base].sort((a, b) => b.lossPercent - a.lossPercent);
    return [...base].sort(
      (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
    );
  }, [tab, filter, search]);

  const totalEntries = filtered.length;
  const avgProfit =
    filtered.reduce((acc, e) => acc + e.profitPercent, 0) /
    (filtered.length || 1);
  const totalLoss =
    filtered.reduce((acc, e) => acc + e.lossPercent, 0) /
    (filtered.length || 1);

  const pieData = [
    {
      name: t("dashboardProfitVsLoss"),
      value: filtered.reduce((acc, e) => acc + e.profitPercent, 0),
    },
    {
      name: t("dashboardProfitVsLoss"),
      value: filtered.reduce((acc, e) => acc + e.lossPercent, 0),
    },
  ];
  const COLORS = ["#29d897", "#ff0476"];

  const barData = filtered.reduce<
    Record<string, { city: string; profit: number }[]>
  >((acc, e) => {
    if (!e.city) return acc;
    if (!acc[e.city]) acc[e.city] = [];
    acc[e.city].push({ city: e.city, profit: e.profitPercent });
    return acc;
  }, {});

  const barChartData = Object.keys(barData).map((city) => ({
    city,
    profit:
      barData[city].reduce((acc, v) => acc + v.profit, 0) /
      barData[city].length,
  }));

  return (
    <section className="flex flex-col lg:flex-row gap-6 py-6">
      <aside
        className={`w-full lg:w-80 flex-shrink-0 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg transition-all duration-300 ${
          sidebarOpen ? "max-h-[90vh]" : "max-h-16"
        } overflow-hidden`}
      >
        <div
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {t("dashboardQuickStats")}
          </h3>
          <ChevronDown
            className={`${
              sidebarOpen ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {sidebarOpen && (
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />{" "}
              {t("dashboardTotalEntries")}: {totalEntries}
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-500" />{" "}
              {t("dashboardAvgProfit")}: {avgProfit.toFixed(2)}%
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />{" "}
              {t("dashboardAvgLoss")}: {totalLoss.toFixed(2)}%
            </div>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
            {t("dashboardSearch")}
          </h3>
          <input
            type="text"
            placeholder={t("dashboardSearchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#ffc208] transition-colors duration-200"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
            {t("dashboardNotifications")}
          </h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300 max-h-40 overflow-auto">
            {filtered.slice(0, 5).map((e) => (
              <div
                key={e.id}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded"
              >
                <Bell className="w-4 h-4 text-yellow-500" />
                <span className="text-xs">
                  {t("dashboardNewEntry")}: {e.name}{" "}
                  {e.city ? `(${e.city})` : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setTab("real-estate")}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              tab === "real-estate"
                ? "bg-[#00dba8] text-white font-semibold border-[#00dba8]"
                : "bg-white dark:bg-neutral-900 border-gray-300 dark:border-gray-700 hover:bg-[#29d897]/20 dark:hover:bg-[#29d897]/20"
            }`}
          >
            {t("dashboardRealEstateTab")}
          </button>
          <button
            onClick={() => setTab("stock")}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              tab === "stock"
                ? "bg-[#00dba8] text-white font-semibold border-[#00dba8]"
                : "bg-white dark:bg-neutral-900 border-gray-300 dark:border-gray-700 hover:bg-[#29d897]/20 dark:hover:bg-[#29d897]/20"
            }`}
          >
            {t("dashboardStockTab")}
          </button>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {t("dashboardFilters")}:
            </span>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 bg-white dark:bg-neutral-900 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#ffc208] transition-colors duration-200"
            >
              <option value="profit">{t("dashboardMostProfit")}</option>
              <option value="loss">{t("dashboardMostLoss")}</option>
              <option value="recent">{t("dashboardMostRecent")}</option>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="!bg-green-50 dark:!bg-green-900">
            <CardContent className="text-center">
              <div className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                {t("dashboardTotalEntries")}
              </div>
              <div className="text-xl font-bold">{totalEntries}</div>
            </CardContent>
          </Card>
          <Card className="!bg-green-50 dark:!bg-green-900">
            <CardContent className="text-center">
              <div className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                {t("dashboardAvgProfit")}
              </div>
              <div className="text-xl font-bold">{avgProfit.toFixed(2)}%</div>
            </CardContent>
          </Card>
          <Card className="!bg-red-50 dark:!bg-red-900">
            <CardContent className="text-center">
              <div className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                {t("dashboardAvgLoss")}
              </div>
              <div className="text-xl font-bold">{totalLoss.toFixed(2)}%</div>
            </CardContent>
          </Card>
          <Card className="!bg-blue-50 dark:!bg-blue-900">
            <CardContent className="text-center">
              <div className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                {t("dashboardAvgYears")}
              </div>
              <div className="text-xl font-bold">
                {(
                  filtered.reduce((acc, e) => acc + e.avgYears, 0) /
                  (filtered.length || 1)
                ).toFixed(1)}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("dashboardProfitVsLoss")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("dashboardAvgProfitByCity")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barChartData}>
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="profit" fill="#29d897" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((e: Entry) => (
            <Card
              key={e.id}
              className="transition-transform transform hover:scale-[1.02] hover:shadow-xl cursor-pointer duration-200 ease-in-out"
            >
              <CardHeader className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {e.name} {e.city ? `— ${e.city}` : ""}
                </CardTitle>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(e.createdAt).toLocaleDateString()}
                </span>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-[#29d897]/10 dark:bg-[#29d897]/20 rounded-md p-2 text-center transition-colors duration-200">
                    <div className="text-gray-500 dark:text-gray-300">
                      {t("dashboardProfitPercent")}
                    </div>
                    <div className="font-semibold text-[#29d897] dark:text-[#29d897]">
                      {e.profitPercent}%
                    </div>
                    <Sparklines data={(e as any).trendData || [0, 2, 5, 3, 6]}>
                      <SparklinesLine color="#29d897" />
                    </Sparklines>
                  </div>

                  <div className="bg-[#ff0476]/10 dark:bg-[#ff0476]/20 rounded-md p-2 text-center transition-colors duration-200">
                    <div className="text-gray-500 dark:text-gray-300">
                      {t("dashboardLossPercent")}
                    </div>
                    <div className="font-semibold text-[#ff0476] dark:text-[#ff0476]">
                      {e.lossPercent}%
                    </div>
                    <Sparklines data={(e as any).lossTrend || [0, 1, 3, 2, 4]}>
                      <SparklinesLine color="#ff0476" />
                    </Sparklines>
                  </div>

                  <div className="bg-[#ff0476]/10 dark:bg-[#ff0476]/20 rounded-md p-2 text-center transition-colors duration-200">
                    <div className="text-gray-500 dark:text-gray-300">
                      Loss %
                    </div>
                    <div className="font-semibold text-[#ff0476] dark:text-[#ff0476]">
                      {e.lossPercent}%
                    </div>
                    <Sparklines data={(e as any).lossTrend || [0, 1, 3, 2, 4]}>
                      <SparklinesLine color="#ff0476" />
                    </Sparklines>
                  </div>

                  <div className="bg-[#29d897]/5 dark:bg-[#ffc208]/20 rounded-md p-2 text-center transition-colors duration-200">
                    <div className="text-gray-500 dark:text-gray-300">
                      {t("dashboardAvgYears")}
                    </div>
                    <div className="font-semibold text-[#ffc208] dark:text-[#ffc208]">
                      {e.avgYears}
                    </div>
                  </div>

                  <div className="md:col-span-1 col-span-2 bg-[#ffc208]/10 dark:bg-[#29d897]/20 rounded-md p-2 text-center transition-colors duration-200">
                    <div className="text-gray-500 dark:text-gray-300">
                      {t("dashboardComments")}
                    </div>
                    <div className="font-semibold text-[#ffc208] dark:text-[#29d897]">
                      {e.comments}
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="flex flex-wrap gap-2 px-2 pb-2 mt-5">
                {e.profitPercent > 50 && (
                  <span className="text-xs bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 px-2 py-1 rounded-full">
                    {t("dashboardHighProfit")}
                  </span>
                )}
                {e.lossPercent > 20 && (
                  <span className="text-xs bg-red-100 dark:bg-red-700 text-red-800 dark:text-red-100 px-2 py-1 rounded-full">
                    {t("dashboardRisky")}
                  </span>
                )}
                {new Date(e.createdAt) >
                  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
                  <span className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full">
                    {t("dashboardRecent")}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
