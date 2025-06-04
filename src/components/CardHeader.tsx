import { StarIcon } from "@/assets/icons/StarIcon";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function CardHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={twMerge("flex flex-col p-6 md:px-10 md:py-8", className)}>
      <div className="inline-flex items-center gap-3">
        <StarIcon className="size-5 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2 ">
        {subtitle}
      </p>
    </div>
  );
}
