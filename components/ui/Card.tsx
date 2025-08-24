import { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:bg-neutral-900 dark:border-neutral-800 " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
}
export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={"mb-3 flex items-center justify-between " + (className ?? "")}
    >
      {children}
    </div>
  );
}
export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={"text-lg font-semibold " + (className ?? "")}>{children}</h3>
  );
}
export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={"space-y-3 " + (className ?? "")}>{children}</div>;
}
