"use client"
import { useSearch } from '@/hooks/search-context'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import { sidebarData } from '@/helper'
import { ArrowBigRightDash } from 'lucide-react'
import { useRouter } from 'next/navigation'


export function CommandMenu() {
    const router = useRouter();
    const { open, setOpen } = useSearch()

    const handleClick = (id) => {
        router.push(`/mgt/${id}`)
        setOpen(false);

        console.log('called');

    }

    return (
        <CommandDialog modal open={open} onOpenChange={setOpen}>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
                {/* <ScrollArea type='hover' className='h-72 pr-1'> */}
                <CommandEmpty>No results found.</CommandEmpty>
                {sidebarData?.map((ele, i) => {
                    const { groupHead, menu } = ele;
                    return (
                        <CommandGroup key={i} heading={groupHead}>
                            {menu?.map((ele, i) => {
                                if (ele?.url)
                                    return (
                                        <CommandItem
                                            key={i}
                                            value={ele.name}
                                            onSelect={() => handleClick(ele.url)}
                                        >
                                            <div className='mr-2 flex h-4 w-4 items-center justify-center' >
                                                <ArrowBigRightDash className='size-2 text-muted-foreground/80' />
                                            </div>
                                            {ele.name}
                                        </CommandItem>
                                    )

                                return ele?.subMenus?.map((ele, i) => (
                                    <CommandItem
                                        key={i}
                                        value={ele.name}
                                        onSelect={() => handleClick(ele.url)}
                                    >
                                        <div className='mr-2 flex h-4 w-4 items-center justify-center' >
                                            <ArrowBigRightDash className='size-2 text-muted-foreground/80' />
                                        </div>
                                        {ele.name}
                                    </CommandItem>
                                ))
                            })}
                        </CommandGroup>
                    )
                })}

            </CommandList>
        </CommandDialog>
    )
}
