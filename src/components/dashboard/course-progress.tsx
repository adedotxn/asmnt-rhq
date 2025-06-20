import { Code, MoreVertical, Copy, PencilRuler } from "lucide-react";

const courses = [
  {
    title: "UI/UX Design",
    progress: 75,
    icon: PencilRuler,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Branding",
    progress: 60,
    icon: Copy,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    title: "Front End",
    progress: 85,
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
];

export function CourseProgress() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div
          key={course.title}
          className="rounded-3xl bg-white px-2 py-3  flex justify-between items-center hover:-translate-y-0.5 hover:shadow-sm transition-all"
        >
          <div className="flex gap-3 items-center ">
            <div className={`p-4 rounded-full ${course.bgColor}`}>
              <course.icon className={`w-3.5 h-3.5 ${course.color}`} />
            </div>
            <div className="grid gap-1">
              <p className="text-xs text-gray-500">2/6 Watched</p>
              <h3 className="font-semibold">{course.title}</h3>
            </div>
          </div>

          <div className="mr-2">
            <MoreVertical className="text-gray-500" size={18} />
          </div>
        </div>
      ))}
    </div>
  );
}
