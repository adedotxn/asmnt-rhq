import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { MoreVertical, Plus } from "lucide-react";
import { AvatarWithProgress } from "./avatar-with-progress";
import { FollowItem } from "../shared/follow-item";

const mentors = [
  {
    name: "Padhang Satrio",
    role: "Mentor",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Zakir Horizontal",
    role: "Mentor",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Leonardo Samuel",
    role: "Mentor",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function RightSidebar() {
  return (
    <div className="w-96 bg-white mr-5 rounded-4xl h-fit">
      {/* Statistics Card */}
      <Card className="shadow-none  h-fit border-none rounded-3xl ">
        <CardHeader className="flex flex-row items-center justify-between py-0">
          <CardTitle className="text-lg">Statistic</CardTitle>
          <Button variant="ghost" size="icon" className="w-6 h-6">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="border-green-600">
          <div className="grid place-items-center gap-3 mb-3">
            <AvatarWithProgress progress={32} fallback="RB" />
            <div className="text-center">
              <p className="font-semibold">Good Morning Jason 🔥</p>
              <p className="text-xs text-gray-500">
                Continuing your learning to achieve your target!
              </p>
            </div>
          </div>

          {/* Simple Chart Placeholder */}
          <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-center p-4">
            <div className="flex items-end gap-3">
              <div className="w-10 h-10 bg-purple-200 rounded-sm"></div>
              <div className="w-10 h-20 bg-purple-700 rounded-sm"></div>
              <div className="w-10 h-14 bg-purple-200 rounded-sm"></div>
              <div className="w-10 h-25 bg-purple-700 rounded-sm"></div>
              <div className="w-10 h-4 bg-purple-200 rounded-sm"></div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>1-10 Aug</span>
            <span>11-20 Aug</span>
            <span>21-30 Aug</span>
          </div>
        </CardContent>
      </Card>

      {/* Your Mentor Card */}
      <Card className="shadow-none border-none mt-8 gap-2 h-fit rounded-4xl">
        <CardHeader className="flex  items-center justify-between py-0">
          <CardTitle className="text-lg">Your mentor</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 border border-purple-300 rounded-full p-4"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className=" bg-gray-100  rounded-2xl px-3 py-3 ">
            {mentors.map((mentor) => (
              <FollowItem
                key={mentor.name}
                fullName={mentor.name}
                avatar={mentor.avatar}
                role={mentor.role}
              />
            ))}

            <div className="">
              <Button
                variant="link"
                className="w-full bg-purple-200 text-purple-600 text-xs rounded-full"
              >
                See All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
