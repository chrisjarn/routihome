// components/BentoGridSecondDemo.tsx
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import CustomVideoPlayer from "./CustomVideoPlayer"; // Adjust the path as necessary

export function BentoGridSecondDemo() {
  return (
    <div>
      {/* Header Section */}
      <div className="py-10 lg:px-0 px-5 max-w-6xl mx-auto">
        <p className="pb-2 text-base bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent h-auto tracking-wider">
          FEATURES
        </p>
        <div className="flex justify-between  items-center">
          <h2 className="text-start text-2xl md:text-4xl  font-normal font-sans bg-clip-text lg:h-10 text-transparent bg-gradient-to-b from-primary to-muted-foreground">
            Route Optimization software for efficient delivery management.
          </h2>
          <p className="text-xs rounded-full border py-2 px-3 lg:block hidden">
            More Coming
          </p>
        </div>
        <p className="text-start text-base max-w-2xl font-sans text-muted-foreground mt-2">
          Streamline route optimization, manage real-time deliveries, and
          enhance team efficiency with an intuitive dispatcher dashboard and
          driver app.
        </p>
      </div>

      {/* Video Grid */}
      <BentoGrid className="max-w-6xl mx-auto px-5 lg:px-0 md:auto-rows-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={
              <p className="text-muted-foreground text-base">
                {item.description}
              </p>
            }
            header={
              <CustomVideoPlayer
                videoUrl={item.videoUrl}
                poster={item.poster}
              />
            }
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Creating routes from scratch",
    description:
      "Learn how to effortlessly create optimized routes with Routi. Boost efficiency, save time, and drive success!",
    videoUrl:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/Routi4.mp4?t=2024-10-10T15%3A05%3A49.306Z",
    poster:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/post1thumbnail.webp?t=2024-10-12T05%3A21%3A24.407Z",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Cut Drive Time in Half!",
    description:
      "Watch as a 1-hour route shrinks to just 35 minutes with one click using Routi.",
    videoUrl:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/Routi5.mp4?t=2024-10-10T15%3A16%3A34.369Z",
    poster:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/post2thumbnail.webp?t=2024-10-12T05%3A21%3A46.430Z",
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Customer Visibility Made Easy",
    description:
      "See how tracking numbers and customer details are instantly accessible - secured and visible only to those with the right permissions.",
    videoUrl:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/Routi6.mp4",
    poster:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/post3thumbnail.webp?t=2024-10-12T05%3A22%3A01.603Z",
    className: "md:col-span-2",
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Bulk Import & Integrations",
    description:
      "Effortlessly sync your data by importing large sets of route addresses or integrating with third-party software.",
    videoUrl:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/Routi7.mp4",
    poster:
      "https://smuohmoridpkjgrkxxyc.supabase.co/storage/v1/object/public/website_videos/post4thumbnail.webp?t=2024-10-12T05%3A22%3A14.169Z",
    className: "md:col-span-2",
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
  },
];
