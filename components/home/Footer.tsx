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
          <div className="mt-2 ml-5 lg:ml-0">
            &copy; copyright Routi 2024. All rights reserved.
          </div>
          <div
            className="mt-4 cursor-pointer w-max lg:pl-0 pl-5"
            onClick={() =>
              window.open("https://www.linkedin.com/company/routiapp/", "_blank")
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_ii_2_147)">
                <circle
                  cx="50.7965"
                  cy="50.7965"
                  r="50.7965"
                  fill="url(#paint0_linear_2_147)"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.5252 26.1193C37.5252 29.2816 35.1174 31.8408 31.3519 31.8408C27.7332 31.8408 25.3254 29.2816 25.3999 26.1193C25.3254 22.8033 27.7331 20.3187 31.4241 20.3187C35.1173 20.3187 37.453 22.8033 37.5252 26.1193ZM25.7026 73.1954V36.3607H37.1503V73.193H25.7026V73.1954Z"
                fill="url(#paint1_linear_2_147)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.3258 48.116C46.3258 43.5216 46.1744 39.6048 46.0231 36.3656H55.9664L56.495 41.4118H56.7209C58.2276 39.0762 61.993 35.5389 68.0941 35.5389C75.625 35.5389 81.2743 40.5106 81.2743 51.3528V73.2002H69.8266V52.7873C69.8266 48.0391 68.1709 44.8023 64.0283 44.8023C60.8636 44.8023 58.9821 46.9866 58.2299 49.094C57.9272 49.8485 57.7782 50.901 57.7782 51.9583V73.2002H46.3304V48.116H46.3258Z"
                fill="url(#paint2_linear_2_147)"
              />
              <defs>
                <filter
                  id="filter0_ii_2_147"
                  x="0"
                  y="-10"
                  width="101.593"
                  height="115.593"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_147"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-10" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.113725 0 0 0 0 0.631373 0 0 0 0 0.94902 0 0 0 0.26 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_2_147"
                    result="effect2_innerShadow_2_147"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_147"
                  x1="50.7965"
                  y1="0"
                  x2="50.7965"
                  y2="101.593"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#333333" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_147"
                  x1="31.4617"
                  y1="20.3187"
                  x2="31.4617"
                  y2="73.1954"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5BA4CA" />
                  <stop offset="1" stop-color="#1872CB" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_147"
                  x1="63.6487"
                  y1="35.5389"
                  x2="63.6487"
                  y2="73.2002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5BA4CA" />
                  <stop offset="1" stop-color="#1872CB" />
                </linearGradient>
              </defs>
            </svg>
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
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black lg:px-0 px-5 py-1  relative z-20"
    >
      <Image priority src={mainLogo} alt="Routi Logo" />
    </Link>
  );
};
