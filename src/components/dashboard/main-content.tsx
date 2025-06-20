import { HeroSection } from "~/components/dashboard/hero-section";
import { CourseProgress } from "~/components/dashboard/course-progress";
import { ContinueWatching } from "~/components/dashboard/continue-watching";
import { YourLesson } from "~/components/dashboard/your-lesson";

export function MainContent() {
  return (
    <main className="flex-1 p-6 space-y-6">
      <HeroSection />
      <CourseProgress />
      <ContinueWatching />
      <YourLesson />
    </main>
  );
}
