import { ArrowDown } from "@/assets/icons/ArrowDown";
import React from "react";

const footerLink = [
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Behance",
    href: "#",
  },
  {
    title: "Dribble",
    href: "#",
  },
  {
    title: "GitHub",
    href: "#",
  },
];
export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 border-t-1 border-white/15 py-6 text-sm">
          <div className=" text-white/40">&copy; 2024. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-6">
            {footerLink.map((link) => (
              <a
                className="inline-flex items-center justify-center gap-1 w-max"
                key={link.title}
                href={link.href}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowDown className="size-4 -rotate-45" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
