import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

export const AvatarWithProgress = ({
  progress = 75,
  src,
  fallback,
}: {
  progress?: number;
  src?: string;
  fallback: string;
}) => {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

  return (
    <div className="relative inline-block">
      <svg
        width="96"
        height="96"
        className="absolute inset-0 -rotate-90"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
      >
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="#8b5cf6"
          strokeWidth="3"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>

      <Avatar className="w-20 h-20 relative z-10 m-2">
        <AvatarImage src={src || "/placeholder.svg?height=48&width=48"} />
        <AvatarFallback>{fallback || "JR"}</AvatarFallback>
      </Avatar>

      <div className="absolute -top-2 -right-1 bg-purple-500 text-white text-xs font-medium px-1 py-1 rounded-full shadow-sm">
        {progress}%
      </div>
    </div>
  );
};
