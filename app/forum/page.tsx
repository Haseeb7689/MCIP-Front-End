"use client";
import { useState } from "react";
import { topics as seed } from "@/data/forum";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useL } from "@/context/LanguageContext";
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react";

export default function ForumPage() {
  const { t } = useL();
  const [tab, setTab] = useState<"real-estate" | "stock">("real-estate");
  const [topics, setTopics] = useState(seed);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const filtered = topics.filter((t) => t.type === tab);

  const createTopic = () => {
    if (!title || !message) {
      toast.error(t("fillAllFields"));
      return;
    }

    setTopics((prev) => [
      {
        id: `t${prev.length + 1}`,
        type: tab,
        title,
        author: "You",
        replies: [
          {
            id: "r1",
            author: "You",
            message,
            createdAt: new Date().toISOString(),
          },
        ],
      },
      ...prev,
    ]);
    toast.success(t("topicCreated"));
    setTitle("");
    setMessage("");
  };

  const addReply = (topicId: string, reply: string) => {
    if (!reply) {
      toast.error(t("addReply"));
      return;
    }
    setTopics((prev) =>
      prev.map((t) =>
        t.id === topicId
          ? {
              ...t,
              replies: [
                ...t.replies,
                {
                  id: `r${t.replies.length + 1}`,
                  author: "You",
                  message: reply,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : t
      )
    );
    toast.success(t("replyAdded"));
  };

  const deleteReply = (topicId: string, replyId: string) => {
    setTopics((prev) =>
      prev.map((t) =>
        t.id === topicId
          ? {
              ...t,
              replies: t.replies.filter((r) => r.id !== replyId),
            }
          : t
      )
    );
    toast.success(t("replyDeleted"));
  };

  return (
    <section className="space-y-6 py-6">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setTab("real-estate")}
          className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
            tab === "real-estate"
              ? "bg-[#00dba8] text-white font-semibold border-[#00dba8]"
              : "bg-white dark:bg-neutral-900 border-gray-300 dark:border-gray-700 hover:bg-[#29d897]/20 dark:hover:bg-[#29d897]/20"
          }`}
        >
          {t("realEstateTab")}
        </button>

        <button
          onClick={() => setTab("stock")}
          className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
            tab === "stock"
              ? "bg-[#00dba8] text-white font-semibold border-[#00dba8]"
              : "bg-white dark:bg-neutral-900 border-gray-300 dark:border-gray-700 hover:bg-[#29d897]/20 dark:hover:bg-[#29d897]/20"
          }`}
        >
          {t("stockTab")}
        </button>
      </div>

      <div
        className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6
      bg-gradient-to-br from-[#29d897]/10 to-[#ffc208]/10 dark:from-gray-900 dark:to-gray-800
      shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <h3 className="font-semibold text-lg mb-4 text-[#29d897] dark:text-[#ffc208]">
          {t("createTopic")}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("title")}
            </label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("message")}
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            className="!bg-[#29d897] hover:!bg-[#ffc208] text-white transition-colors duration-200"
            onClick={createTopic}
          >
            {t("post")}
          </Button>
        </div>
      </div>

      <ul className="space-y-4">
        {filtered.map((topic) => (
          <li
            key={topic.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5
          bg-gradient-to-br from-white to-[#29d897]/10 dark:from-neutral-900 dark:to-gray-800
          shadow-md transition-transform transform hover:scale-[1.01] hover:shadow-xl duration-200"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                {topic.title}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {topic.replies.length} {t("replies")}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {topic.replies.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 bg-[#29d897]/5 dark:bg-[#29d897]/20 px-3 py-2 rounded-lg"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {r.author}:
                    </span>{" "}
                    {r.message}
                    <button
                      onClick={() => deleteReply(topic.id, r.id)}
                      className="text-gray-500 hover:text-[#ff0476] dark:hover:text-[#ffc208] transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </span>
                </div>
              ))}
            </div>

            <ReplyBox
              onSubmit={(text) => addReply(topic.id, text)}
              label={t("reply")}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ReplyBox({
  onSubmit,
  label,
}: {
  onSubmit: (text: string) => void;
  label: string;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="mt-3 flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        className="flex-1 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#29d897] dark:focus:ring-[#ffc208] transition-colors duration-200"
      />
      <Button
        className="!bg-[#29d897] hover:!bg-[#ffc208] text-white transition-colors duration-200"
        onClick={() => {
          onSubmit(value);
          setValue("");
        }}
      >
        {label}
      </Button>
    </div>
  );
}
