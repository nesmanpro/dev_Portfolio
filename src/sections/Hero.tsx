"use client";
import { ArrowDown } from "@/assets/icons/ArrowDown";
import React from "react";
import avatarImg from "@/assets/icons/avatarIconBatman.png";
import grainImg from "@/assets/images/grain.webp";
import Image from "next/image";
import HeroOrbitWrapper from "@/components/HeroOrbitWrapper";

import BtnGlobal from "@/components/BtnGlobal";
import TextAnimatedBtn from "@/components/animated/TextBtn";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-30">
        <div
          className="absolute inset-0  opacity-5"
          style={{
            backgroundImage: `url(${grainImg.src})`,
          }}
        ></div>
        <HeroOrbitWrapper />
      </div>

      <div className="container px-8 m-auto z-30">
        <div className="flex flex-col items-center">
          <Image
            src={avatarImg}
            alt="Image of a guy with an orange jacket"
            className="w-40"
          />
          <div className="flex justify-center items-center dark:bg-gray-950 bg-gray-200 gap-4 py-1.5 px-4 w-fit rounded-lg text-sm border dark:border-white/15 border-gray-900/15 text-center">
            <div className="relative bg-green-500 p-1 rounded-full">
              <div className="absolute inset-0 bg-green-500 p-1 rounded-full animate-ping-lg"></div>
            </div>

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
          <BtnGlobal className="relative">
            <TextAnimatedBtn
              initText={"Explore My Work"}
              initIcon={ArrowDown}
              secondText={"Let's fly together!"}
              secondIcon={ArrowDown}
            />
          </BtnGlobal>

          <BtnGlobal light className="relative">
            <TextAnimatedBtn
              initText={"Contact me!"}
              initIcon={ArrowDown}
              secondText={"Let's connect"}
              secondAltIcon="👋"
            />
          </BtnGlobal>
        </div>
      </div>
    </section>
  );
};
