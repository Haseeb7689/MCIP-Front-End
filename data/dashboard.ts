export type Entry = {
  id: string;
  type: "real-estate" | "stock";
  name: string;
  city?: string;
  profitPercent: number;
  lossPercent: number;
  avgYears: number;
  comments: string;
  createdAt: string;
};

export const dashboardEntries: Entry[] = [
  {
    id: "e1",
    type: "real-estate",
    name: "Bahria Town",
    city: "Lahore",
    profitPercent: 72,
    lossPercent: 28,
    avgYears: 3.1,
    comments: "Good long-term",
    createdAt: "2025-07-10",
  },
  {
    id: "e2",
    type: "stock",
    name: "OGDC",
    profitPercent: 60,
    lossPercent: 40,
    avgYears: 1.2,
    comments: "Volatile",
    createdAt: "2025-07-20",
  },
  {
    id: "e3",
    type: "real-estate",
    name: "DHA City",
    city: "Karachi",
    profitPercent: 45,
    lossPercent: 55,
    avgYears: 2.5,
    comments: "Mixed results",
    createdAt: "2025-08-01",
  },
];
