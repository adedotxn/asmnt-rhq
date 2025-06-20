import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ArrowRight, PencilRuler } from "lucide-react";

export function YourLesson() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between py-2">
        <div className="text-lg font-semibold">Your Lesson</div>
        <Button variant="link" className="text-purple-600 underline">
          See all
        </Button>
      </div>
      <div className="bg-white py-3 rounded-xl">
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4 text-sm text-gray-500 font-medium border-b pb-2 px-16">
            <div className="col-span-3">MENTOR</div>
            <div className="col-span-2">TYPE</div>
            <div className="col-span-5">DESC</div>
            <div className="col-span-2">ACTION</div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center py-3 hover:bg-gray-50 rounded-lg transition-colors px-6">
            <div className="col-span-3 flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Padhang Satrio</p>
                <p className="text-xs text-gray-500">7/16/2024</p>
              </div>
            </div>
            <div className="col-span-2">
              <Badge
                variant="outline"
                className="text-xs bg-purple-100 text-purple-800 rounded-full "
              >
                <PencilRuler /> UI/UX DESIGN
              </Badge>
            </div>
            <div className="col-span-5">
              <p className="text-sm font-medium">Understand Of UI/UX Design</p>
            </div>
            <div className="col-span-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 border border-purple-600 rounded-full"
              >
                <ArrowRight className="w-4 h-4 rotate-[-30deg] text-purple-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
