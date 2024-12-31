import { IconChecklist } from "@tabler/icons-react";
import {
  Component,
  Settings2,
  LayoutDashboard,
  UserCog,
  Wrench,
  Palette,
  CircleHelp,
  BellDot,
  PanelTop,
  UsersRound,
  Star,
  Box,
  BriefcaseBusiness,
  Squircle,
  Bug,
  LockKeyhole,
  ServerOff,
  Construction,
  Ban,
} from "lucide-react";

export const sidebarData = [
  {
    groupHead: "General",
    menu: [
      {
        name: "Dashboard",
        url: "/mgt/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        name: "Tasks",
        url: "/mgt/tasks",
        icon: IconChecklist,
        isActive: true,
      },
      {
        name: "Users",
        url: "/mgt/users",
        icon: UsersRound,
      },
    ],
  },
  {
    groupHead: "Pages",
    menu: [
      {
        name: "Auth",
        icon: Settings2,
        subMenus: [
          {
            name: "Sign In",
            url: "/sign-in",
          },
          {
            name: "Sign Up",
            url: "/sign-up",
          },
          {
            name: "Forgot Password",
            url: "/forgot-password",
          },
          {
            name: "OTP",
            url: "/otp",
          },
        ],
      },
      {
        name: "Errors",
        icon: Bug,
        subMenus: [
          {
            name: "Unauthorized",
            icon: LockKeyhole,
            url: "/401",
          },
          {
            name: "Forbidden",
            icon: UserCog,
            url: "/403",
          },
          {
            name: "Not Found",
            icon: Ban,
            url: "/404",
          },
          {
            name: "Internal Server Error",
            icon: ServerOff,
            url: "/500",
          },
          {
            name: "Maintenance Error",
            icon: Construction,
            url: "/503",
          },
        ],
      },
    ],
  },
  {
    groupHead: "Data Management",
    menu: [
      // {
      //   name: "Users",
      //   url: "/mgt/user",
      //   icon: UsersRound,
      // },
      {
        name: "Products",
        url: "/mgt/product",
        icon: Box,
      },
      {
        name: "Reviews",
        url: "/mgt/testimonials",
        icon: Star,
      },

      {
        name: "Companies",
        url: "/mgt/clients",
        icon: Squircle,
      },
      {
        name: "Openings",
        url: "/mgt/openings",
        icon: BriefcaseBusiness,
      },
      // {
      //   name: "Pages",
      //   icon: Layers,
      //   subMenus: [
      //     {
      //       name: "Services",
      //       url: "/services",
      //       icon: Hash,
      //     },
      //     {
      //       name: "Portfolios",
      //       url: "portfolios",
      //       icon: Hash,
      //     },
      //   ],
      // },
      // {
      //   name: "Components",
      //   icon: Layers,
      //   subMenus: [
      //     {
      //       name: "Industrys",
      //       url: "/industrys",
      //       icon: Asterisk,
      //     },
      //     {
      //       name: "Achievements",
      //       url: "/achievements",
      //       icon: Asterisk,
      //     },
      //   ],
      // },
    ],
  },
  {
    groupHead: "Others",
    menu: [
      {
        name: "Settings",
        icon: Settings2,
        subMenus: [
          {
            name: "Profile",
            icon: UserCog,
            url: "/mgt/profile",
          },
          {
            name: "Account",
            icon: Wrench,
            url: "/mgt/account",
          },
          {
            name: "Appearance",
            icon: Palette,
            url: "/mgt/appearance",
          },
          {
            name: "Notifications",
            icon: BellDot,
            url: "/mgt/notifications",
          },
          {
            name: "Display",
            icon: PanelTop,
            url: "/mgt/display",
          },
        ],
      },
      {
        name: "Help Center",
        icon: CircleHelp,
        url: "/mgt/help-center",
      },
      {
        name: "UI Components",
        url: "/mgt/components",
        icon: Component,
      },
    ],
  },
];
