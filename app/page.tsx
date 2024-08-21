"use client";
import { FlipWords } from "../components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { Compare } from "@/components/ui/compare";
import { Spotlight } from "../components/ui/spotlight";
import { LogosWithBlurFlip } from "../components/ui/logoCloud";
import { Play } from "lucide-react";
import { BentoGridSecondDemo } from "../components/ui/mainBento";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { FloatingDockDemo } from "../components/ui/mainDock";
import Header from "../components/home/Header";
import CardDemo from "../components/blocks/cards-demo-1";
import { SimpleFooterWithFourGrids } from "../components/home/Footer";

const content = [
  {
    title: "Automatically Import Delivery Data",
    description:
      "Seamlessly gather and input all the details needed to create a route, whether it’s a complex, multi-stop journey or a simple, direct path. Our platform adapts to your specific needs, making route creation effortless for dispatchers and drivers alike.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <video
          src="https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/1st%20(1).mp4"
          poster="https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/1stimage.webp"
          className="h-full w-full object-cover scale-105 overflow-hidden"
          autoPlay
          loop
          muted
        />
      </div>
    ),
  },
  {
    title: "Create Fully Optimised Delivery Routes",
    description:
      "Say goodbye to wasted time with our one-click route optimisation. Tailor your operations with custom delivery zones and let our platform consider every factor to generate the most efficient routes possible.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <video
          src="https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/3rd%20(3).mp4"
          poster="https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/3rdImage.webp?t=2024-08-21T00%3A26%3A07.721Z"
          className="h-full w-full scale-105 object-cover"
          autoPlay
          loop
          muted
        />
      </div>
    ),
  },
  {
    title: "Track and Manage Deliveries in Real Time",
    description:
      "Stay ahead of any last-minute changes with live route tracking and editing. Keep your operations smooth by instantly updating all users and making necessary adjustments with minimal disruption. Ensure drivers and customers are always in sync with real-time notifications.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <video
          src="https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/4th%20(1).mp4"
          poster="https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/image4.webp?t=2024-08-21T02%3A06%3A21.675Z"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
    ),
  },
  {
    title: "iOS and Android Ready",
    description:
      "Equip your drivers with powerful mobile tools for navigation, route updates, and communication with dispatchers. Our iOS and Android apps ensure that your team is always connected, informed, and ready to deliver—no matter where they are.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-start justify-center text-white">
        <FloatingDockDemo />
      </div>
    ),
  },
];

export default function Home() {
  const words = ["efficient", "optimised", "smarter", "scalable"];

  return (
    <main>
      <Spotlight
        className="-top-40 md:left-[800px] absolute 2xl:left-[980px]  md:-top-20"
        fill="white"
      />
      {/* Header */}
      <Header />
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="max-w-6xl  overflow-hidden h-screen  rounded-none  mx-auto gap-x-20  2xl:gap-x-10 grid grid-cols-2 items-center">
        <div className="py-10">
          <button className=" mb-6 no-underline group cursor-pointer relative shadow-2xl  rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Route Planning Software</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <div className="text-6xl mx-auto font-normal  text-muted-foreground">
            Build
            <FlipWords words={words} /> <br />
            routes with{" "}
            <span className="text-primary  font-medium tracking-[-0.08em]">
              Routi.
            </span>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground max-w-lg text-base ">
              Enhance route efficiency, streamline planning, and effortlessly
              scale your operations. Connect your drivers with your customers
              seamlessly - smarter deliveries every time.
            </p>
          </div>
          <div className="mt-6 flex space-x-2 items-center">
            <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Start Building
            </button>
            <Button size="lg" variant="ghost" className="rounded-full">
              Get a demo
            </Button>
          </div>
          <div className="mt-6">
            <Button variant="ghost">
              <Play className="mr-2 h-4 w-4" /> Discover what Routi can do{" "}
              <span className="text-muted-foreground font-bold pl-1">
                {" "}
                (1:25)
              </span>
            </Button>
          </div>
        </div>
        <div>
          <div className="p-3 border z-[999] bg-neutral-800 border-neutral-700 rounded-[32px] relative">
            <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-background/50 to-background scale-[1.1] pointer-events-none"></div>

            <div className="p-0 bg-black border-neutral-700 border rounded-[24px]">
              <Compare
                firstImage=""
                secondImage=""
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className=" w-full lg:h-[350px] 2xl:h-[400px] "
                slideMode="hover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Logo cloud */}
      <div>
        <div className="h-[45rem] w-full bg-background bg-grid-small-white/[0.2]  relative flex items-center  justify-center">
          <div className=" absolute top-0 h-20 w-full bg-gradient-to-b from-background to-transparent " />
          <div className=" absolute bottom-0 h-20 w-full bg-gradient-to-t from-background to-transparent " />
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <LogosWithBlurFlip />
        </div>
      </div>
      <div className="pb-20">
        <BentoGridSecondDemo />
      </div>
      <div className="mt-32">
        <div className="py-0 max-w-6xl mx-auto">
          <p className="pb-2 text-base text-center bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent h-auto tracking-wider">
            HOW IT WORKS
          </p>
          <div className="flex justify-between items-center">
            <h2 className="mx-auto text-2xl md:text-4xl text-center font-normal font-sans bg-clip-text h-10 text-transparent bg-gradient-to-b from-primary to-muted-foreground">
              Efficient Route Optimisation for Fleet Managers and Drivers
            </h2>
          </div>
          <p className="text-center mx-auto text-base max-w-2xl font-sans text-muted-foreground mt-2">
            Streamline your fleet operations, optimise routes on the go, and
            enhance your team's efficiency with our intuitive management
            dashboard and driver app.
          </p>
        </div>
        <StickyScroll content={content} />
      </div>
      <div className="w-full max-w-6xl mx-auto pb-36 grid space-x-10 grid-cols-2">
        <div className="flex h-full">
          <CardDemo />
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-full">
            <p className="pb-2 text-base  bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent h-auto tracking-wider">
              WHY ROUTI?
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-start text-2xl md:text-4xl font-normal font-sans  h-auto ">
                Unlock the Power of Seamless Route Optimisation
              </h2>
            </div>
            <p className="text-start text-base max-w-full font-sans text-muted-foreground mt-2">
              Experience smarter, faster, and more efficient deliveries with
              Routi. From real-time route adjustments to effortless team
              coordination, Routi is designed to elevate your operations and
              keep you ahead of the curve.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] bg-gradient-to-t from-primary/5 via-[#141516cc] to-transparent">
<div className="max-w-6xl mx-auto grid grid-cols-2">
<div className="pt-20">
<h1 className="text-5xl font-medium tracking-tight">Plan the present.</h1>
<h1 className="text-5xl font-medium tracking-tight text-muted-foreground mt-2">Build the future.</h1>
</div>
<div>


</div>
</div>
      </div>
      <SimpleFooterWithFourGrids />
    </main>
  );
}
