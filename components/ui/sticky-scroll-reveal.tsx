"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0vh", "end 50vh"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#09090B",
    "var(--slate-950)",
    "var(--neutral-900)",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-full"
      ref={ref}
    >
      <div className="w-full h-auto mt-10 pb-44">
        <div className="max-w-6xl mx-auto flex justify-between relative space-x-10 rounded-md px-6">
          <div className="relative flex items-start px-0">
            <div className="max-w-2xl">
              {content.map((item, index) => (
                <div key={item.title + index} className="my-24">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-medium  text-primary"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-lg text-muted-foreground max-w-lg mt-4"
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
              <div className="h-0" />
            </div>
          </div>
          <motion.div
            className={cn(
              "hidden lg:block h-[23rem] sticky top-32 mt-6 p-2 border bg-white/10 border-background-700 rounded-[32px]",
              contentClassName
            )}
            animate={
              activeCard === content.length - 1
                ? { width: "260px", marginLeft: "0px", marginRight: "150px" }
                : { width: "520px", marginLeft: "0px", marginRight: "0" }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className={cn(
                "h-full w-full bg-background border-background-700 border rounded-[24px] overflow-hidden p-0",
                contentClassName
              )}
            >
              {content[activeCard].content ?? null}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
