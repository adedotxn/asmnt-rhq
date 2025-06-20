"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { Progress } from "../ui/progress";
import { useRef } from "react";

const courses = [
  {
    id: 1,
    title: "Beginner's Guide to Becoming a Professional Front-End Developer",
    category: "FRONT END",
    mentor: "Leonardo samuel",
    mentorRole: "Mentor",
    image: "/photo.jpg",
    liked: false,
    progress: 20,
  },
  {
    id: 2,
    title: "Optimizing User Experience with the Best UI/UX Design",
    category: "UI/UX DESIGN",
    mentor: "Bayo Salto",
    mentorRole: "Mentor",
    image: "/photo.jpg",
    liked: true,
    progress: 80,
  },
  {
    id: 3,
    title: "Rebrand and Refresh Company Image",
    category: "BRANDING",
    mentor: "Padhang Satrio",
    mentorRole: "Mentor",
    image: "/photo.jpg",
    liked: false,
    progress: 65,
  },
  {
    id: 4,
    title: "Optimizing User Experience with the Best UI/UX Design",
    category: "UI/UX DESIGN",
    mentor: "Bayo Salto",
    mentorRole: "Mentor",
    image: "/photo.jpg",
    liked: false,
    progress: 80,
  },
];

export function ContinueWatching() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Continue Watching</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full group hover:bg-purple-500"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-4 h-4 group-hover:text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full group hover:bg-purple-500"
            onClick={scrollRight}
          >
            <ChevronRight className="w-4 h-4 group-hover:text-white" />
          </Button>
        </div>
      </div>

      <div className="w-full bg-white rounded-4xl p-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex-shrink-0  w-4/12 overflow-hidden"
            >
              <div className="relative grid place-items-center">
                <div className="relative h-[160px] w-full">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    fill={true}
                    alt="Picture of the author"
                    className=" rounded-3xl object-cover"
                  />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 w-8 h-8 rounded-full"
                >
                  <Heart
                    className={`w-4 h-4 ${course.liked ? "fill-red-500 text-red-500" : "text-white"}`}
                  />
                </Button>
              </div>
              <div className="py-3">
                <Badge
                  variant="secondary"
                  className="mb-2 text-xs bg-purple-100 text-purple-700"
                >
                  {course.category}
                </Badge>
                <h3 className="font-semibold  line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <div className="py-3">
                  <Progress value={course.progress} className="h-1 " />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback className="text-xs">
                      {course.mentor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm font-medium">{course.mentor}</p>
                    <p className="text-xs text-gray-500">{course.mentorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
