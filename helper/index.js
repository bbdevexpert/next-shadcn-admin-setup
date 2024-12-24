import {
  Component,
  Settings2,
  LayoutDashboard,
  Layers,
  UserCog,
  Wrench,
  Palette,
  CircleHelp,
  BellDot,
  PanelTop,
  Hash,
} from "lucide-react";

export const sidebarData = [
  {
    groupHead: "General",
    menu: [
      {
        name: "Dashboard",
        url: "dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        name: "Pages",
        icon: Layers,
        subMenus: [
          {
            name: "Services",
            url: "/services",
            icon: Hash,
          },
          {
            name: "Portfolios",
            url: "portfolios",
            icon: Hash,
          },
        ],
      },
    ],
  },
  {
    groupHead: "Others",
    menu: [
      {
        name: "Components",
        url: "components",
        icon: Component,
      },
      {
        name: "Settings",
        icon: Settings2,
        subMenus: [
          {
            name: "Profile",
            icon: UserCog,
            url: "/profile",
          },
          {
            name: "Account",
            icon: Wrench,
            url: "/account",
          },
          {
            name: "Appearance",
            icon: Palette,
            url: "/appearance",
          },
          {
            name: "Notifications",
            icon: BellDot,
            url: "/notifications",
          },
          {
            name: "Display",
            icon: PanelTop,
            url: "/display",
          },
        ],
      },
      {
        name: "Help Center",
        icon: CircleHelp,
      },
    ],
  },
];
