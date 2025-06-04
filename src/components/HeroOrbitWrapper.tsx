import React from "react";
import HeroOrbit from "./HeroOrbit";
import { StarIcon } from "@/assets/icons/StarIcon";
import { SparkIcon } from "@/assets/icons/SparkIcon";

export default function HeroOrbitWrapper() {
  return (
    <>
      <div className="size-[620px] hero-rings"></div>
      <div className="size-[1020px] hero-rings"></div>
      <div className="size-[1420px] hero-rings"></div>
      <div className="size-[1820px] hero-rings"></div>
      <HeroOrbit
        size={450}
        rotation={60}
        orbitAnimated
        orbitDuration="30s"
        spinAnimated
        spinDuration="10s"
      >
        <SparkIcon className="size-6 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={550}
        rotation={20}
        orbitAnimated
        orbitDuration="35s"
        spinAnimated
        spinDuration="10s"
      >
        <StarIcon className="size-10 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={570} rotation={-10} orbitAnimated orbitDuration="40s">
        <div className="size-2 bg-emerald-300/15 rounded-full" />
      </HeroOrbit>

      <HeroOrbit size={570} rotation={170} orbitAnimated orbitDuration="45s">
        <div className="size-1.5 bg-emerald-300/15 rounded-full" />
      </HeroOrbit>

      <HeroOrbit
        size={590}
        rotation={100}
        orbitAnimated
        orbitDuration="50s"
        spinAnimated
        spinDuration="10s"
      >
        <StarIcon className="size-6 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={600}
        rotation={150}
        orbitAnimated
        orbitDuration="55s"
        spinAnimated
        spinDuration="10s"
      >
        <SparkIcon className="size-12 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={650}
        rotation={-40}
        orbitAnimated
        orbitDuration="60s"
        spinAnimated
        spinDuration="10s"
      >
        <SparkIcon className="size-12 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={670}
        rotation={80}
        orbitAnimated
        orbitDuration="65s"
        spinAnimated
        spinDuration="10s"
      >
        <div className="size-3 bg-emerald-300/15 rounded-full" />
      </HeroOrbit>

      <HeroOrbit
        size={800}
        rotation={-72}
        orbitAnimated
        orbitDuration="70s"
        spinAnimated
        spinDuration="10s"
      >
        <StarIcon className="size-14 text-emerald-300" />
      </HeroOrbit>
    </>
  );
}
