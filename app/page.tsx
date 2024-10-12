"use client";
import { FlipWords } from "../components/ui/flip-words";
import { Button } from "@/components/ui/button";
import React from "react";
import { SimpleFooterWithFourGrids } from "../components/home/Footer";
import mainLogo from "./mainLogo.svg";
import Image from "next/image";
import { BentoGridSecondDemo } from "@/components/ui/mainBento";

export default function Home() {
  const words = ["efficient", "optimized", "smarter", "scalable"];

  return (
    <main>
      <div className="py-4 px-5 max-w-6xl flex items-center justify-between mx-auto">
        <Image priority src={mainLogo} alt="Routi Logo" />

        <button className="px-4 py-2.5 rounded-xl tracking-wide text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Join Waitlist
        </button>
      </div>

      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className=" lg:px-0 overflow-hidden   rounded-none  mx-auto text-center items-center">
        <div className="lg:py-20 py-14 ">
          <button className=" mb-6 no-underline group cursor-pointer relative shadow-2xl  rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative  lg:flex hidden space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Route Planning Software</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <div className="lg:text-8xl text-5xl mx-auto max-w-sm lg:max-w-full  lg:text-center text-center font-normal tracking-tighter  text-muted-foreground">
            <div className="text-start mx-auto lg:ml-20 px-5  lg:px-0 flex justify-center">
              <div className="">Build</div>
              <FlipWords
                words={words}
                className="lg:w-[500px] w-max overflow-hidden"
              />{" "}
              <br />
            </div>
            routes with{" "}
            <span className="text-primary  font-medium tracking-[-0.08em]">
              Routi.
            </span>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground  text-center flex justify-center max-w-xl mx-auto lg:text-lg text-base px-5 lg:px-0 ">
              Enhance route efficiency, streamline planning, and effortlessly
              scale your operations. Connect your drivers with your customers
              seamlessly - smarter deliveries every time.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <BentoGridSecondDemo />
        <p className="text-center mt-10 lg:hidden block border w-max mx-auto px-3 py-2 text-xs rounded-full">More Features Coming Soon</p>
  
      </div>

      <div className="w-full lg:h-[270px] h-[200px] bg-gradient-to-t from-primary/5 via-[#141516cc] to-transparent">
        <div className="max-w-6xl mx-auto px-5 lg:px-0 lg:grid grid-cols-2">
          <div className="pt-0 lg:pt-20">
            <h1 className="lg:text-5xl text-4xl font-medium tracking-tight">
              Optimize today.
            </h1>
            <h1 className="lg:text-5xl text-4xl font-medium tracking-tight text-muted-foreground mt-2">
              Lead tomorrow.
            </h1>
          </div>
          <div className="flex space-x-2 items-end lg:justify-end lg:mt-0 mt-5 pr-5">
            <Button className="rounded-xl">Join waitlist</Button>
            <Button variant="secondary" className="rounded-xl">
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden"></div>
      <SimpleFooterWithFourGrids />
    </main>
  );
}
