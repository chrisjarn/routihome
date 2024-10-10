import Image from "next/image";
import Link from "next/link";
import React from "react";
import mainLogo from "../../app/mainLogo.svg";

export function SimpleFooterWithFourGrids() {
  return (
    <div className="border-t  px-0 py-20 bg-background w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  ">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <div className="mt-2 ml-2">
            &copy; copyright Routi 2024. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image priority src={mainLogo} alt="Routi Logo" />
    </Link>
  );
};
