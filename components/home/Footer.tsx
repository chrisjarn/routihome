import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SimpleFooterWithFourGrids() {
  const pages = [
    {
      title: "All Products",
      href: "#",
    },
    {
      title: "Studio",
      href: "#",
    },
    {
      title: "Clients",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  const socials = [
    {
      title: "Facebook",
      href: "#",
    },
    {
      title: "Instagram",
      href: "#",
    },
    {
      title: "Twitter",
      href: "#",
    },
    {
      title: "LinkedIn",
      href: "#",
    },
  ];
  const legals = [
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
    {
      title: "Cookie Policy",
      href: "#",
    },
  ];

  const signups = [
    {
      title: "Sign Up",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
    {
      title: "Forgot Password",
      href: "#",
    },
  ];
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-text-neutral-800 text-primary font-bold">
              Pages
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-300 list-none space-y-4">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href="/products"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors  text-primary font-medium">
              Socials
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-muted-foreground list-none space-y-4">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-primary "
                    href="/products"
                  >
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-300 font-bold">
              Legal
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-300 list-none space-y-4">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href="/products"
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-300 font-bold">
              Register
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-300 list-none space-y-4">
              {signups.map((auth, idx) => (
                <li key={"auth" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href="/products"
                  >
                    {auth.title}
                  </Link>
                </li>
              ))}
            </ul>
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

      <span className="font-medium text-white">Routi</span>
    </Link>
  );
};
