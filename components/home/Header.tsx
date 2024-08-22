"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-6xl mx-auto fixed z-[999999] left-0 right-0 top-4"
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
        <div className="flex items-center justify-between w-full">
          <svg
            width="100"
            viewBox="0 0 76 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(false)}
          >
            <path
              d="M16.9591 13H12.7737L10.1827 9.24445H3.42443V13H0V0H13.1179C13.6856 0 14.2111 0.102315 14.6943 0.306945C15.1895 0.511574 15.6183 0.782407 15.9807 1.11945C16.3551 1.45648 16.645 1.84768 16.8504 2.29306C17.0678 2.72639 17.1765 3.17177 17.1765 3.62917V5.525C17.1765 5.91017 17.092 6.30139 16.9229 6.69861C16.7658 7.09583 16.5484 7.46295 16.2706 7.8C16.0048 8.13705 15.6908 8.42594 15.3284 8.66667C14.9781 8.89538 14.6158 9.04583 14.2413 9.11806L16.9591 13ZM13.7521 4.7125V4.45972C13.7521 4.18288 13.6313 3.94212 13.3897 3.7375C13.1481 3.52083 12.8159 3.4125 12.3932 3.4125H3.42443V5.83195H12.3932C12.8522 5.83195 13.1904 5.7176 13.4078 5.48889C13.6373 5.26018 13.7521 5.00139 13.7521 4.7125ZM30.8485 13H21.7529C21.1973 13 20.6718 12.8977 20.1766 12.6931C19.6934 12.4764 19.2646 12.1875 18.8902 11.8264C18.5278 11.4532 18.2379 11.0259 18.0205 10.5444C17.8151 10.0509 17.7124 9.52733 17.7124 8.97361V4.02639C17.7124 3.47267 17.8151 2.95509 18.0205 2.47361C18.2379 1.98009 18.5278 1.55278 18.8902 1.19167C19.2646 0.818518 19.6934 0.529629 20.1766 0.325001C20.6718 0.108334 21.1973 0 21.7529 0H30.8485C31.4041 0 31.9235 0.108334 32.4067 0.325001C32.9019 0.529629 33.3308 0.818518 33.6932 1.19167C34.0674 1.55278 34.3573 1.98009 34.5629 2.47361C34.7803 2.95509 34.889 3.47267 34.889 4.02639V8.97361C34.889 9.52733 34.7803 10.0509 34.5629 10.5444C34.3573 11.0259 34.0674 11.4532 33.6932 11.8264C33.3308 12.1875 32.9019 12.4764 32.4067 12.6931C31.9235 12.8977 31.4041 13 30.8485 13ZM31.4645 7.74583V5.25417C31.4645 5.00139 31.4162 4.76667 31.3196 4.55C31.235 4.32129 31.1082 4.12267 30.9391 3.95417C30.782 3.78566 30.5888 3.65323 30.3593 3.55695C30.1419 3.46066 29.9003 3.4125 29.6345 3.4125H23.0031C22.4716 3.4125 22.0247 3.58705 21.6623 3.93611C21.312 4.28518 21.1369 4.72455 21.1369 5.25417V7.74583C21.1369 7.99861 21.1791 8.23934 21.2637 8.46806C21.3603 8.68472 21.4872 8.87733 21.6442 9.04583C21.8133 9.21434 22.0126 9.34677 22.2421 9.44306C22.4716 9.53934 22.7192 9.5875 22.985 9.5875H29.5983C30.1419 9.5875 30.5888 9.40695 30.9391 9.04583C31.2894 8.68472 31.4645 8.25139 31.4645 7.74583ZM52.9731 0.0180555V8.95556C52.9731 9.50927 52.8644 10.0329 52.647 10.5264C52.4414 11.0199 52.1515 11.4532 51.7773 11.8264C51.4149 12.1875 50.986 12.4764 50.4909 12.6931C50.0076 12.8977 49.4821 13 48.9145 13H39.8552C39.2994 13 38.774 12.8977 38.2789 12.6931C37.7834 12.4764 37.3486 12.1875 36.9743 11.8264C36.6119 11.4532 36.322 11.0199 36.1046 10.5264C35.8991 10.0329 35.7966 9.50927 35.7966 8.95556V0.0180555H39.221V7.74583C39.221 8.01066 39.2691 8.2574 39.366 8.48611C39.4625 8.71483 39.5953 8.91344 39.7646 9.08195C39.9336 9.23844 40.127 9.36483 40.3444 9.46111C40.5737 9.54538 40.8155 9.5875 41.0691 9.5875H47.6825C48.2016 9.5875 48.6428 9.41899 49.0051 9.08195C49.3675 8.73288 49.5487 8.2875 49.5487 7.74583V0.0180555H52.9731ZM71.2743 0V3.4125H64.2443V13H60.8198V3.4125H53.8804V0H71.2743ZM72.5756 0H76V13H72.5756V0Z"
              fill="white"
            />
          </svg>
          <div className="flex space-x-0 items-center">
            <Button
              variant="ghost"
              className="rounded-full text-sm text-muted-foreground "
              onMouseEnter={() => setIsHovered(true)}
            >
              Products
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground "
              onMouseEnter={() => setIsHovered(false)}
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground "
              onMouseEnter={() => setIsHovered(false)}
            >
              Careers
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onMouseEnter={() => setIsHovered(true)}
            >
              Integrations
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground "
              onMouseEnter={() => setIsHovered(false)}
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground "
              onMouseEnter={() => setIsHovered(false)}
            >
              Knowledge Base
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-muted-foreground "
              onMouseEnter={() => setIsHovered(false)}
            >
              Contact Us
            </Button>
          </div>

          <div
            className="flex space-x-1 items-center"
            onMouseEnter={() => setIsHovered(false)}
          >
            <Button variant="secondary" className="rounded-xl">
              Sign In
            </Button>

            <button className="px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Try free for 7 days
            </button>
          </div>
        </div>

        {/* This area will keep the dropdown open */}
        {isHovered && (
          <div
            className="absolute w-full h-[calc(20rem-2.9rem)] left-0 top-[2.9rem]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* This div acts as the extended area where the dropdown remains open */}
          </div>
        )}
      </motion.div>
    </div>
  );
}
