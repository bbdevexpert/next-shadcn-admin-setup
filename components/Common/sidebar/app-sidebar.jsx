'use client'
import { GalleryVerticalEnd } from "lucide-react"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, } from "@/components/ui/sidebar"
import { sidebarData } from "@/helper"

// This is sample data.
const data = {
  user: {
    name: "Super Admin",
    email: "superadmin@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Company Inc.",
    logo: GalleryVerticalEnd,
    plan: "Next + Postgres",
  },
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain navData={sidebarData} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
