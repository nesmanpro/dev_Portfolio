"use client";
import JsIcon from "@/assets/icons/JavascriptIcon";
import HTMLIcon from "@/assets/icons/Html5Icon";
import CSSIcon from "@/assets/icons/Css3Icon";
import ReactIcon from "@/assets/icons/ReactIcon";
import GithubIcon from "@/assets/icons/GithubIcon";
import FMIcon from "@/assets/icons/FramerMotionIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import bookCover from "@/assets/images/lanieta.jpg";
import meMemoji from "@/assets/images/memo1.png";
import map from "@/assets/images/map.jpg";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useRef } from "react";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "motion/react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JsIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "Framer Motion",
    iconType: FMIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
];

const hobbies = [
  {
    title: "Cycling",
    emoji: "🚴",
    left: "50%",
    top: "5%",
  },
  {
    title: "Climbing",
    emoji: "🧗",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "45%",
    top: "45%",
  },
  {
    title: "Films",
    emoji: "🍿",
    left: "60%",
    top: "65%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "5%",
    top: "75%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
];

export const AboutSection = () => {
  const contRef = useRef(null);

  return (
    <section id="about" className="container py-14 px-6">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspire me."
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              subtitle="Explore the books shaping my perspective"
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image
                src={bookCover}
                alt="Portada libro La nieta del seños Lihm"
              />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              subtitle="Explore the technologies and tools I use to craft digital
              experiences."
              className=""
            />

            <ToolboxItems
              items={toolboxItems}
              className=""
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:45s]"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              subtitle="Explore my interests and hobbies beyond the digital realm."
            />

            <div ref={contRef} className="relative flex-1">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={contRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] relative z-0 md:col-span-2 lg:col-span-1">
            <Image
              src={map}
              alt="My location"
              className="h-full w-full object-cover "
            />
            <div
              className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              rounded-full flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-900/20
            "
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping-sm [animation-duration:1.5s]"></div>
              <Image
                src={meMemoji}
                alt="Myself as a memoji"
                className="size-30"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
