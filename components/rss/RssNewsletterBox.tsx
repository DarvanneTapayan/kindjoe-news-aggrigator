import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RssNewsletterBox() {
  return (
    <div className="w-full rounded-md bg-[#E8EDFF] p-4 flex flex-col gap-3 font-[Poppins]">
      <h3 className="text-black font-bold text-lg">KJ Today</h3>

      <p className="text-black/70 text-sm leading-snug">
        Get our newsletter for the inside scoop on today’s big stories.
      </p>

      <form className="flex w-full items-center gap-2 mt-1">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white"
        />
        <Button type="submit" className="bg-blue-700 text-white hover:bg-blue-800">
          Sign up
        </Button>
      </form>
    </div>
  );
}
