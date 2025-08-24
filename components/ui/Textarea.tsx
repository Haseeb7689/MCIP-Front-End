"use client";
import { TextareaHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm min-h-[100px]",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
export default Textarea;
