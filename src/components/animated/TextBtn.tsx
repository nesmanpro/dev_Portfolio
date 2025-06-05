import { motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function TextAnimatedBtn({
  className,
  initText,
  initIcon,
  initAltIcon,
  secondText,
  secondIcon,
  secondAltIcon,
}: {
  className?: string;
  initText: string;
  initIcon?: React.ComponentType;
  secondText: string;
  secondIcon?: React.ComponentType;
  secondAltIcon?: string;
  initAltIcon?: string;
}) {
  const [isHover, setIsHover] = useState(false);

  const transition = {
    duration: 0.2,
    y: { type: "spring", bounce: 0.5 },
    scale: { type: "spring", bounce: 0.5 },
  };

  const InitComponent = initIcon;
  const OutroComponent = secondIcon;

  return (
    <motion.div
      className={twMerge("absolute inset-0 overflow-hidden", className)}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <motion.div
        className="absolute inset-0 justify-center inline-flex items-center gap-1 py-2 px-3"
        initial={{ y: 0 }}
        animate={isHover ? { y: -40 } : { y: 0 }}
        transition={transition}
      >
        <span>{initText}</span>

        {initIcon !== undefined && InitComponent ? (
          <span>
            <InitComponent />
          </span>
        ) : (
          initAltIcon !== undefined && (
            <span className="ml-2">{initAltIcon}</span>
          )
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0 justify-center inline-flex items-center gap-1 py-2 px-3"
        initial={{ y: 40 }}
        animate={isHover ? { y: 0 } : { y: 40 }}
      >
        <span>{secondText}</span>
        <motion.span
          className=""
          initial={{ scale: 0 }}
          animate={isHover ? { scale: 0.9 } : { scale: 0 }}
          transition={{ duration: 0.4 }}
        >
          {secondIcon !== undefined && OutroComponent ? (
            <span>
              <OutroComponent />
            </span>
          ) : (
            secondAltIcon !== undefined && (
              <span className="ml-2">{secondAltIcon}</span>
            )
          )}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
