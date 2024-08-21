import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <div>
      <div className="py-10 max-w-6xl mx-auto">
        <p className="pb-2 text-base  bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent h-auto tracking-wider">
          FEATURES
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-start text-2xl md:text-4xl font-normal font-sans bg-clip-text h-10 text-transparent bg-gradient-to-b from-primary to-muted-foreground">
            Delivery management software for multi-driver teams
          </h2>
          <button className="text-sm">View All</button>
        </div>
        <p className="text-start text-base max-w-2xl font-sans text-muted-foreground mt-2">
          Optimise routes instantly, handle delivery in real time, and boost
          your team’s productivity with a simple dispatcher dashboard and driver
          app.
        </p>
      </div>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={
              <p className="text-muted-foreground">{item.description}</p>
            }
            header={
              item.title === "Proof of delivery" ? <Skeleton /> : <Skeleton />
            }
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background to-black "></div>
);

const items = [
  {
    title: "Route Optimisation",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Powerful Integrations",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Customer Notifications",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton  />, // Pass showButton prop for "Proof of delivery"
    className: "md:col-span-1",
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Proof of Delivery",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Driven Analytics",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Dynamic Optimisation",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton  />, // Pass showButton prop for "Proof of delivery"
    className: "md:col-span-1",
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Fuel Cost & Emissions",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "API First",
    description:
      "Proof of delivery In-app photos and signatures collected by drivers are instantly visible to dispatchers.",
    header: <Skeleton />, // Pass showButton prop for "Proof of delivery"
    className: "md:col-span-1",
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
  },
];
