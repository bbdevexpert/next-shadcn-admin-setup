import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({ navData }) {
  return (
    <>
      {navData && navData?.map((ele, i) => {
        const { groupHead, menu } = ele;
        return (
          <SidebarGroup key={i}>
            <SidebarGroupLabel>{groupHead}</SidebarGroupLabel>
            <SidebarMenu>
              {menu && menu?.map((ele, i) => {
                const { name, url, subMenus, icon, isActive } = ele;
                return (
                  <div key={i}>
                    {subMenus ?
                      <Collapsible
                        asChild
                        defaultOpen={isActive}
                        className="group/collapsible">
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={name}>
                              {icon && <ele.icon />}
                              <span>{name}</span>
                              {
                                subMenus &&
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              }
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {subMenus?.map((ele, i) => {
                                const { name, url } = ele;
                                return (
                                  <SidebarMenuSubItem key={i}>
                                    <SidebarMenuSubButton asChild>
                                      <Link href={`/mgt/${url}`}>
                                        {icon && <ele.icon />}
                                        <span>{name}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                )
                              })}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                      :
                      <SidebarMenuButton asChild >
                        <Link href={`/mgt/${url}`}>
                          {icon && <ele.icon />}
                          <span>{name}</span>
                        </Link>
                      </SidebarMenuButton>
                    }
                  </div>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        )
      })
      }
    </>
  );
}
