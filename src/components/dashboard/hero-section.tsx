import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative bg-purple-700 rounded-2xl p-4 text-white overflow-hidden">
      <div className="relative z-10">
        <div className="mb-2">
          <span className="text-sm font-medium opacity-90">ONLINE COURSE</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 w-6/12">
          Sharpen Your Skills with Professional Online Courses
        </h1>
        <Button className="bg-black  font-medium py-5 pl-4 pr-2 rounded-full hover:scale-x-110 hover:bg-black cursor-pointer">
          Join Now
          <span className="bg-white ml-1 p-1.5 rounded-full">
            <ChevronRight className="w-3 h-3" color="black" />
          </span>
        </Button>
      </div>
    </div>
  );
}
