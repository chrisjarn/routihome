"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimate, stagger } from "framer-motion";
import mainLogo from "../../app/mainLogo.svg";
import Image from "next/image";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
    if (isHovered && hoveredButton === "products") {
      animate(
        "li",
        { opacity: 1, scale: 1, filter: "blur(0px)" },
        { delay: stagger(0.1, { startDelay: 0.15 }) }
      );
    } else {
      animate("li", { opacity: 0, scale: 0.8, y: 0, filter: "blur(10px)" }, { duration: 0.2 });
    }
  }
  }, [isHovered, hoveredButton, animate]);

  return (
    <div
      className="w-full hidden md:block max-w-6xl mx-auto fixed z-[999999] left-0 right-0 top-4"
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="backdrop-blur-3xl border border-border/50 pl-4 pt-0.5 pr-[2.5px] rounded-xl flex items-start justify-between"
        animate={{
          height: isHovered ? "20rem" : "2.9rem",
          backgroundColor: isHovered
            ? "rgba(17, 17, 17, 0.9)"
            : "rgba(17, 17, 17, 0.4)", // Replace "rgba(17, 17, 17, 0.8)" and "rgba(17, 17, 17, 0.4)" with the appropriate color values
        }} // h-80 vs h-12
        initial={{ backgroundColor: "rgba(17, 17, 17, 0.4)" }} // Starting background color
      >
        {isHovered && (
          <div
            className="absolute w-full h-[calc(20rem-2.9rem)] left-0 top-[2.9rem]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {hoveredButton === "products" && (
              <div className="w-full grid grid-cols-3 space-x-10 px-3 mt-2">
                <div className="grid">
                  <ul ref={scope} className="space-y-2 text-lg font-medium tracking-tight">
                    <motion.li initial={{ opacity: 0, y: 20 }}>Routi Planning</motion.li>
                    <motion.li initial={{ opacity: 0, y: 20 }}>Routi Optimization</motion.li>
                    <motion.li initial={{ opacity: 0, y: 20 }}>Milk</motion.li>
                  </ul>
                </div>
                <div></div>
              </div>
            )}
            {hoveredButton === "integrations" && (
              <div>Integrations content here...</div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between w-full">
          <Image
            priority
            src={mainLogo}
            alt="Routi Logo"
            onMouseEnter={() => setIsHovered(false)}
          />

          <div className="flex space-x-0 items-center">
            <Button
              variant="ghost"
              className="rounded-full text-sm text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredButton("products");
              }}
            >
              Products
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(false);
              }}
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(false);
              }}
            >
              Careers
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredButton("integrations");
              }}
            >
              Integrations
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(false);
              }}
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(false);
              }}
            >
              Knowledge Base
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => {
                setIsHovered(false);
              }}
            >
              Contact Us
            </Button>
          </div>

          <div
            className="flex space-x-1 items-center"
            onMouseEnter={() => setIsHovered(false)}
          >
            <Button variant="ghost" className="rounded-xl">
              Sign In
            </Button>

            <button className="px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Try free for 7 days
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
