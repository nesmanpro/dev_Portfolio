"use client";
import { ArrowDown } from "@/assets/icons/ArrowDown";
import React from "react";
import grainImg from "@/assets/images/grain.webp";
import BtnGlobal from "@/components/BtnGlobal";
import TextAnimatedBtn from "@/components/animated/TextBtn";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 pt-12 container">
      <div className="">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0  opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImg.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <BtnGlobal
                dark
                className="relative w-full md:w-fit min-w-[160px] h-12 rounded-xl font-semibold text-sm gap-2 mt-6 md:px-2 cursor-pointer"
              >
                <TextAnimatedBtn
                  initText={"Contact Me"}
                  initAltIcon="📡"
                  secondText={"Get in touch!"}
                  secondIcon={ArrowDown}
                />
              </BtnGlobal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
