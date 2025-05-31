import { ArrowDown } from "@/assets/icons/ArrowDown";
import React from "react";
import avatarImg from "@/assets/icons/avatarIconBatman.png";
import grainImg from "@/assets/images/grain.jpg";
import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import { StarIcon } from "@/assets/icons/StarIcon";
import { SparkIcon } from "@/assets/icons/SparkIcon";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-30">
        <div
          className="absolute inset-0  opacity-5"
          style={{
            backgroundImage: `url(${grainImg.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-rings"></div>
        <div className="size-[1020px] hero-rings"></div>
        <div className="size-[1420px] hero-rings"></div>
        <div className="size-[1820px] hero-rings"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-10 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100}>
          <StarIcon className="size-6 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={60}>
          <SparkIcon className="size-6 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-40}>
          <SparkIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={150}>
          <SparkIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={670} rotation={80}>
          <div className="size-3 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={570} rotation={-10}>
          <div className="size-2 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={570} rotation={170}>
          <div className="size-1.5 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>
      </div>

      <div className="container px-8 m-auto z-30">
        <div className="flex flex-col items-center">
          <Image
            src={avatarImg}
            alt="Image of a guy with an orange jacket"
            className="w-40"
          />
          <div className="flex justify-center items-center dark:bg-gray-950 bg-gray-200 gap-4 py-1.5 px-4 w-fit rounded-lg text-sm border dark:border-white/15 border-gray-900/15 text-center">
            <div className="bg-green-500 p-1 rounded-full"></div>
            <div>Available for new project</div>
          </div>
        </div>
        <div className="m-auto text-center mt-6 flex flex-col gap-6 md:gap-8 max-w-lg">
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="dark:text-white/50 text-gray-900/60 md:text-lg ">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-3 justify-center mt-6">
          <button className="inline-flex gap-2 items-center justify-center font-semibold h-11 w-50 px-4 rounded-lg border dark:border-white/15 border-gray-900/10 cursor-pointer">
            <span>Explore My Work</span>
            <ArrowDown className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down size-6" />
          </button>
          <button className="inline-flex gap-2 items-center justify-center font-semibold h-11 w-50 px-4 rounded-lg dark:bg-white dark:text-gray-900 text-white bg-gray-900 cursor-pointer">
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
