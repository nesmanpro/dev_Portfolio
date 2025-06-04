import { ArrowDown } from "@/assets/icons/ArrowDown";
import React from "react";
import grainImg from "@/assets/images/grain.webp";

export const ContactSection = () => {
  return (
    <div className="py-16 px-6 pt-12 container">
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
              <button className="inline-flex text-white gap-1 bg-gray-900 border-1 border-gray-900 items-center px-6 h-12 rounded-xl w-max cursor-pointer">
                <span className="font-semibold">Contact Me</span>
                <ArrowDown className="size-4 -rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
