import { AppSidebar } from "@/components/common/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import { ProfileDropdown } from "@/components/common/header/profile-dropdown";
import { ModeToggle } from "@/components/ModeToggle";
import { SearchComp } from "@/components/common/header/search";
import { DynamicBreadcrumb } from "@/components/common/DynamicBreadcrumb";

export default function RootLayout({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex px-4 py-3 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="border" />
              <Separator orientation="vertical" className="mx-2 h-6" />
              <DynamicBreadcrumb />
            </div>
            <div className="flex items-center gap-2">
              <SearchComp />
              <ModeToggle />
              <ProfileDropdown />
            </div>
          </header>
          <div className="p-4 ">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
