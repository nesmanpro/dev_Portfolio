import { StarIcon } from "@/assets/icons/StarIcon";

const words = [
  "Performant",
  "Accesible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimizing",
  "Usable",
  "Reliable",
];

export const Tape = () => {
  return (
    <div className=" overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  flex items-center -rotate-3 -mx-1">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
          <div className="flex gap-4 items-center">
            {words.map((word) => (
              <div
                key={word}
                className="inline-flex items-center gap-4 py-4 text-nowrap"
              >
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-4 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
