import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/layout/app-sidebar";
import { Header } from "~/components/layout/header";
import { MainContent } from "~/components/dashboard/main-content";
import { RightSidebar } from "~/components/layout/right-sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="grid md:flex md:flex-1 ">
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
