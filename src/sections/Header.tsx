"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Project",
    href: "#project",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
export const Header = () => {
  const [activeTab, setActiveTab] = useState(navLinks[0].href);
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-100">
      <nav className=" flex gap-1 p-0.5 border rounded-full bg-white/10 border-white/15 backdrop-blur-xs">
        {navLinks.map((item) => (
          <a
            key={item.label}
            onClick={() => setActiveTab(item.href)}
            href={item.href}
            className={`relative z-0 nav-items text-white`}
          >
            <span className=" mix-blend-exclusion">{item.label}</span>
            {activeTab === item.href && (
              <motion.div
                layoutId="item-bubble"
                className="absolute inset-0 -z-10 bg-white rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              ></motion.div>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};
