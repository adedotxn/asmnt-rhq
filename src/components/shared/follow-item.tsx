import { PlusIcon, UserRoundCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "../ui/button";

export function FollowItem({
  fullName,
  avatar,
  role,
}: {
  fullName: string;
  avatar?: string;
  role: string;
}) {
  return (
    <div className="flex items-center justify-between border-t first:border-t-0 group">
      <div className="flex items-center py-3 gap-3">
        <div className="relative">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-purple-100">
              {fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full border-2 border-white grid place-items-center">
            <PlusIcon size={12} color="white" />
          </div>
        </div>
        <div>
          <p className="font-medium text-sm">{fullName}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer text-xs h-7 border-[0.5px] border-purple-300 hover:text-purple-600 text-purple-700 bg-transparent rounded-xl"
      >
        <UserRoundCheck className="text-purple-800 w-2 h-2" />
        Follow
      </Button>
    </div>
  );
}
