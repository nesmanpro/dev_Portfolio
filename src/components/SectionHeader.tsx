import { twMerge } from "tailwind-merge";

export default function SectionHeader({
  title,
  eyebrow,
  description,
  className,
}: {
  title: string;
  eyebrow: string;
  description: string;
  className?: string;
}) {
  return (
    <>
      <div className={twMerge("flex justify-center items-center", className)}>
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center ">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mx-auto mt-4 md:text-lg md:mt-8 max-w-md">
        {description}
      </p>
    </>
  );
}
