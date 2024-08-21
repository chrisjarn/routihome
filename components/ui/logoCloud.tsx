"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function LogosWithBlurFlip() {
  const [logos, setLogos] = useState([
    [
      {
        name: "Aceternity UI",
        src: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
      },
      {
        name: "Gamity",
        src: "https://assets.aceternity.com/pro/logos/gamity.png",
      },
      {
        name: "Host it",
        src: "https://assets.aceternity.com/pro/logos/hostit.png",
      },
      {
        name: "Asteroid Kit",
        src: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
      },
    ],
    [
      {
        name: "Aceternity UI 2",
        src: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
      },
      {
        name: "Gamity 2",
        src: "https://assets.aceternity.com/pro/logos/gamity.png",
      },
      {
        name: "Host it 2",
        src: "https://assets.aceternity.com/pro/logos/hostit.png",
      },
      {
        name: "Asteroid Kit 2",
        src: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    
    <div className="relative z-20  px-4 md:px-8">
      <h2 className="text-center text-2xl md:text-4xl max-w-3xl mx-auto font-normal font-sans  bg-clip-text text-transparent bg-gradient-to-b from-primary to-muted-foreground">
      Empowering the Future of Fleet Management. <span className="text-muted-foreground">From Innovative Startups to Industry Leaders.</span>
      </h2>

      <div className="flex gap-10 flex-wrap justify-center md:gap-10 relative h-full w-full mt-14">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.name}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width="100"
                height="100"
                className="md:h-20 md:w-40 h-10 w-20 object-contain filter invert"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
