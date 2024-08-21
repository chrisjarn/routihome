"use client";
import { cn } from "@/lib/utils";

export default function CardDemo() {
  return (
    <div className="max-w-full w-full flex space-x-2 items-start">
      <div
        className={cn(
          "group w-[60%] cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4",
          "bg-[url(https://t3.ftcdn.net/jpg/06/10/59/86/360_F_610598668_QGGaYrb9wtWpgptT4aPc2BhvmaAXpGEy.jpg)] bg-cover",
          "before:absolute before:inset-0 before:bg-background before:opacity-50", // Dark overlay added here
          "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHU0ZDQyeTljbXJzaDIzNjdtZXl3bXFuMmhkOTV5ODEwOTlyZG12cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/diUKszNTUghVe/giphy.webp)]",
          "hover:before:bg-opacity-0", // Remove overlay on hover
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 mb-2">
          <h1 className="font-semibold text-xl md:text-4xl text-primary  font-sans tracking-tighter relative">
            Reduce delivery costs by 20%
          </h1>
        </div>
      </div>
      <div className="w-[40%] grid gap-y-2 grid-cols-1 h-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card   rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4",
          "bg-[url(https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=16&fit=max&q=75%2016w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=32&fit=max&q=75%2032w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=48&fit=max&q=75%2048w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=64&fit=max&q=75%2064w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=96&fit=max&q=75%2096w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=128&fit=max&q=75%20128w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=256&fit=max&q=75%20256w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=384&fit=max&q=75%20384w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=640&fit=max&q=75%20640w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=750&fit=max&q=75%20750w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=828&fit=max&q=75%20828w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=1080&fit=max&q=75%201080w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=1200&fit=max&q=75%201200w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=1920&fit=max&q=75%201920w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=2048&fit=max&q=75%202048w,%20https://images.prismic.io/getcircuit/0ddb0d8f-06fe-4fe1-b4aa-d1ddd850e415_Switch+case+study.jpg?auto=compress%2Cformat&rect=0%2C0%2C896%2C1152&w=3840&fit=max&q=75%203840w)] bg-cover  w-full",
          "before:absolute before:inset-0 before:bg-background before:opacity-60", // Dark overlay added here
          "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTNpbDBobGFrdm5lc2dzMmFkdWhvOXA0NzZramMwY3ZkcDF0c2FkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oGRFrD8HqAUe5CXIc/giphy.webp)]",
          "hover:before:bg-opacity-0", // Remove overlay on hover
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-0",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 mb-2">
          <h1 className="font-semibold text-xl md:text-3xl text-primary font-sans tracking-tighter relative">
            Increase Delivery Speed by 30%
          </h1>
        </div>
      </div>
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-full  rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4",
          "bg-[url(https://gskinsurance.com.au/wp-content/uploads/2022/11/owner-driver-courier-insurance-in-australia.jpg)] bg-cover  w-full",
          "before:absolute before:inset-0 before:bg-background before:opacity-60", // Dark overlay added here
          "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnZla2l3a2RhbnFkeDh0emdpNzFtZno5cm9wd2htdGFsZ3VtcWx3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nc9qLBq1AE5qVjF8Lk/giphy.webp)]",
          "hover:before:bg-opacity-0", // Remove overlay on hover
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-0",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 mb-2">
          <h1 className="font-semibold text-xl md:text-3xl text-primary font-sans tracking-tighter relative">
            Improve Driver Safety
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
}
