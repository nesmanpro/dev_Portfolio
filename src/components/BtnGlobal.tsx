import { motion } from "motion/react";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function BtnGlobal({
  children,
  className,
  light = false,
  dark = false,
}: PropsWithChildren<{
  className?: string;
  light?: boolean;
  dark?: boolean;
}>) {
  let btnType;

  if (dark) {
    btnType = "text-white bg-gray-900";
  } else if (light) {
    btnType = "bg-white text-gray-900";
  } else {
    btnType = "border border-white/15";
  }

  return (
    <motion.button
      className={twMerge(
        `inline-flex gap-2 items-center justify-center font-semibold h-11 w-50 px-4 rounded-lg ${btnType} cursor-pointer`,
        className
      )}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}
