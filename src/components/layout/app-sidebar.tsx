"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import {
  LayoutDashboard,
  Inbox,
  BookOpen,
  CheckSquare,
  Users,
  Settings,
  LogOut,
  Sparkle,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, active: true },
  { title: "Inbox", icon: Inbox },
  { title: "Lesson", icon: BookOpen },
  { title: "Task", icon: CheckSquare },
  { title: "Group", icon: Users },
];

const friends = [
  {
    name: "Bagus Mahdie",
    role: "Friend",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Sir Dandy",
    role: "Old Friend",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Jhon Tosan",
    role: "Friend",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

const settingsItems = [
  { title: "Setting", icon: Settings, color: "black" },
  { title: "Logout", icon: LogOut, color: "red-500" },
];

export function AppSidebar() {
  return (
    <Sidebar className=" border-r border-gray-200">
      <SidebarContent className="bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 bg-purple-800 rounded-full flex items-center justify-center">
              <Sparkle className="fill-white text-white" size={14} />
            </div>
            <span className="font-semibold text-lg">Coursue</span>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-gray-500 uppercase px-6">
            Overview
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.active}
                    className={`mx-3 text-base  py-5  ${item.active ? "text-blue-600 font-semibold" : "hover:bg-gray-50"}`}
                  >
                    <item.icon
                      className={`${item.active ? "w-12 h-12 fill-purple-700 text-purple-700" : "w-5 h-5"}`}
                    />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-gray-500 uppercase px-6 mb-2">
            Friends
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-7">
              {friends.map((friend) => (
                <SidebarMenuItem key={friend.name}>
                  <SidebarMenuButton className="mx-3 hover:bg-gray-50">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {friend.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{friend.name}</span>
                      <span className="text-xs text-gray-500">
                        {friend.role}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto">
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-gray-500 uppercase tracking-wider px-6">
              Settings
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="mx-3 hover:bg-gray-50">
                      <item.icon
                        className={`w-7 h-7 text-${item.color}`}
                        strokeWidth={3}
                      />
                      <span
                        className={`font-semibold ${item.title === "Logout" ? `text-${item.color}` : ""}`}
                      >
                        {item.title}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
