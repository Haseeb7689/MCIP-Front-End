"use client";
import { useState, useMemo } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { stocks } from "@/data/stocks";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import OathModal from "@/components/ui/OathModal";
import { useL } from "@/context/LanguageContext";
import { toast } from "react-toastify";

const ItemSchema = z.object({
  stockId: z.string().min(1, "Required"),
  name: z.string().min(2, "Required"),
  whatsapp: z.string().min(10, "Enter valid number"),
  invested: z.enum(["yes", "no"], { message: "Required" }),
  duration: z.enum(["1-2 years", "5+ years", "10+ years"], {
    message: "Required",
  }),
  profit: z.enum(["yes", "no"], { message: "Required" }),
  rating: z.coerce.number().min(1).max(5),
  comment: z.string().min(3, "At least 3 characters").max(500, "Max 500"),
});

const FormSchema = z.object({
  items: z.array(ItemSchema).min(1),
});

type FormType = z.infer<typeof FormSchema>;

type PollComment = {
  name: string;
  stockId: string;
  comment: string;
  rating: number;
  profit: boolean;
};

export default function StockCommunity() {
  const { t } = useL();
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [poll, setPoll] = useState<{
    total: number;
    profit: number;
    loss: number;
    ratingSum: number;
    comments: PollComment[];
  }>({
    total: 0,
    profit: 0,
    loss: 0,
    ratingSum: 0,
    comments: [],
  });

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [
        {
          stockId: stocks[0].id,
          name: "",
          whatsapp: "",
          invested: "yes",
          duration: "1-2 years",
          profit: "yes",
          rating: 3,
          comment: "",
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: FormType) => {
    toast(
      <>
        <strong>Mock submit</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    );

    let batchProfit = 0;
    let batchLoss = 0;
    let batchRatingSum = 0;
    const batchComments: PollComment[] = [];

    data.items.forEach((it) => {
      if (it.profit === "yes") batchProfit += 1;
      else batchLoss += 1;

      batchRatingSum += it.rating;

      if (it.comment?.trim()) {
        batchComments.push({
          name: it.name,
          stockId: it.stockId,
          comment: it.comment.trim(),
          rating: it.rating,
          profit: it.profit === "yes",
        });
      }
    });

    setPoll((prev) => ({
      total: prev.total + data.items.length,
      profit: prev.profit + batchProfit,
      loss: prev.loss + batchLoss,
      ratingSum: prev.ratingSum + batchRatingSum,
      comments: [...batchComments, ...prev.comments].slice(0, 20),
    }));

    setSubmitted(true);
    reset();
  };

  const { profitPct, lossPct, avgRating } = useMemo(() => {
    const total = poll.total || 0;
    const profitPct = total ? Math.round((poll.profit / total) * 100) : 0;
    const lossPct = total ? Math.round((poll.loss / total) * 100) : 0;
    const avgRating = total ? Number((poll.ratingSum / total).toFixed(2)) : 0;
    return { profitPct, lossPct, avgRating };
  }, [poll]);

  const Stars = ({ value }: { value: number }) => {
    const full = Math.floor(value);
    const half = value - full >= 0.5;
    const total = 5;

    const items = Array.from({ length: total }, (_, i) => {
      if (i < full) return "★";
      if (i === full && half) return "☆";
      return "☆";
    });

    return (
      <span
        className="text-lg leading-none"
        aria-label={`Average rating ${value} out of 5`}
      >
        {items.join(" ")}
      </span>
    );
  };

  return (
    <section className="space-y-6 mt-5">
      {!accepted && <OathModal onAccept={() => setAccepted(true)} />}

      <h1 className="text-3xl font-bold text-[#ff0476] dark:text-[#29d897]">
        {t("StockCommunityTitle")}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((f, idx) => (
          <div
            key={f.id}
            className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#ff0476]/10 via-[#29d897]/10 to-[#ffc208]/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-md transition-colors duration-300"
          >
            <div className="md:col-span-2">
              <label className="text-sm font-medium">
                {t("StockCommunityCompanyLabel")}
              </label>
              <Select
                className="mt-1 w-full"
                {...register(`items.${idx}.stockId`)}
              >
                {stocks.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </Select>
              <p className="text-xs mt-1 text-gray-500">
                {t("StockCommunityCompanyDescription")}
              </p>
              {errors.items?.[idx]?.stockId && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.items[idx]?.stockId?.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">{t("nameLabel")}</label>
              <Input
                className="mt-1 w-full"
                {...register(`items.${idx}.name`)}
              />
              {errors.items?.[idx]?.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.items[idx]?.name?.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("whatsappLabel")}
              </label>
              <Input
                className="mt-1 w-full"
                {...register(`items.${idx}.whatsapp`)}
              />
              {errors.items?.[idx]?.whatsapp && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.items[idx]?.whatsapp?.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("investedLabel")}
              </label>
              <Select
                className="mt-1 w-full"
                {...register(`items.${idx}.invested`)}
              >
                <option value="yes">{t("investedYes")}</option>
                <option value="no">{t("investedNo")}</option>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("durationLabel")}
              </label>
              <Select
                className="mt-1 w-full"
                {...register(`items.${idx}.duration`)}
              >
                <option value="1-2 years">{t("duration1_2")}</option>
                <option value="5+ years">{t("duration5plus")}</option>
                <option value="10+ years">{t("duration10plus")}</option>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">{t("profitLabel")}</label>
              <Select
                className="mt-1 w-full"
                {...register(`items.${idx}.profit`)}
              >
                <option value="yes">{t("profitYes")}</option>
                <option value="no">{t("profitNo")}</option>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">{t("ratingLabel")}</label>
              <Input
                type="number"
                min="1"
                max="5"
                className="mt-1 w-full"
                {...register(`items.${idx}.rating`)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">{t("commentLabel")}</label>
              <Textarea
                className="mt-1 w-full resize-none"
                {...register(`items.${idx}.comment`)}
              />
              {errors.items?.[idx]?.comment && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.items[idx]?.comment?.message as string}
                </p>
              )}
            </div>
          </div>
        ))}

        <Button
          type="submit"
          className="!bg-[#ffc208] hover:!bg-[#29d897] text-white font-semibold transition-colors duration-200"
        >
          {t("voteSubmit")}
        </Button>

        {submitted && (
          <p className="text-[#29d897] mt-2 font-medium">
            ✅ {t("submittedMsg")}
          </p>
        )}
      </form>

      <div className="p-6 rounded-2xl mt-4 bg-white/60 dark:bg-black/40 border border-gray-200 dark:border-gray-700 shadow-md space-y-5">
        <h2 className="text-2xl font-semibold text-[#ff0476] dark:text-[#29d897]">
          {t("pollTitle")}
        </h2>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>{t("profitStat")}</span>
              <span>{profitPct}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-[#29d897] to-[#0dcaf0] transition-all"
                style={{ width: `${profitPct}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>{t("lossStat")}</span>
              <span>{lossPct}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-[#ff0476] to-[#ffc208] transition-all"
                style={{ width: `${lossPct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{t("avgRating")}</span>
          <Stars value={avgRating} />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({avgRating}/5)
          </span>
          <span className="ml-auto text-xs text-gray-500">
            {t("totalResponses")}: {poll.total}
          </span>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">{t("commentsTitle")}</p>
          {poll.comments.length === 0 ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("noComments")}
            </p>
          ) : (
            <ul className="space-y-3">
              {poll.comments.map((c, i) => {
                const stockName =
                  stocks.find((s) => s.id === c.stockId)?.name ??
                  "Selected Stock";
                const shortName = c.name?.trim()
                  ? c.name.trim().split(" ").slice(0, 2).join(" ")
                  : "Anonymous";

                return (
                  <li
                    key={`${c.name}-${i}`}
                    className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold">{shortName}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {stockName}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span
                        className={
                          c.profit ? "text-emerald-600" : "text-rose-500"
                        }
                      >
                        {c.profit ? t("profit") : t("loss")}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-yellow-600">{c.rating}/5</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {c.comment}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        {t("footer")}
      </p>
    </section>
  );
}
