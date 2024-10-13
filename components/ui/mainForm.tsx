import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignupFormDemo } from "./waitlistForm";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2.5 rounded-xl tracking-wide text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Join Waitlist
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader></DialogHeader>
        <SignupFormDemo />
      </DialogContent>
    </Dialog>
  );
}
