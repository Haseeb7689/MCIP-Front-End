export type Topic = {
  id: string;
  type: "real-estate" | "stock";
  title: string;
  author: string;
  replies: { id: string; author: string; message: string; createdAt: string }[];
};

export const topics: Topic[] = [
  {
    id: "t1",
    type: "real-estate",
    title: "Is Capital Smart City worth it for 3 years?",
    author: "Adeel",
    replies: [
      {
        id: "r1",
        author: "Sara",
        message: "Depends on location and block.",
        createdAt: "2025-07-15",
      },
    ],
  },
  {
    id: "t2",
    type: "stock",
    title: "OGDC vs PSO for dividends?",
    author: "Hamza",
    replies: [],
  },
];
