import { Input } from "~/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Bell, Mail, Search } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="border-gray-200 px-6 py-4">
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-4 w-9/12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2  w-4 h-4" />
            <Input
              placeholder="Search your course..."
              className="pl-10 bg-white border focus:bg-white rounded-full shadow-none py-5"
            />
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center">
            <Button
              className="border-1 border-gray-300 rounded-full size-10"
              variant="ghost"
              size="icon"
            >
              <Mail className="w-5 h-5  cursor-pointer" />
            </Button>

            <Button
              className="border-1 border-gray-300 rounded-full size-10"
              variant="ghost"
              size="icon"
            >
              <Bell className="w-5 h-5  cursor-pointer" />
            </Button>
          </div>

          <div className="w-[2px] h-9 bg-gray-300"></div>

          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-purple-200">JR</AvatarFallback>
            </Avatar>
            <span className="font-medium ">Jason Ranti</span>
          </div>
        </div>

        <div className="flex items-center gap-2"></div>
      </div>
    </header>
  );
}
