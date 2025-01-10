'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Menu, X } from 'lucide-react'

export function ComplexHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary mr-8">
                            Logo
                        </Link>
                        <nav className="hidden md:block">
                            <ul className="flex space-x-4">
                                <li><Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Dashboard</Link></li>
                                <li>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary">
                                            Projects
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>
                                                <Link href="/projects/active">Active Projects</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link href="/projects/archived">Archived Projects</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link href="/projects/create">Create New Project</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary">
                                            Team
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>
                                                <Link href="/team/members">Team Members</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link href="/team/roles">Roles & Permissions</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link href="/team/invite">Invite New Member</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li><Link href="/reports" className="text-sm font-medium text-muted-foreground hover:text-primary">Reports</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/avatars/01.png" alt="@username" />
                                        <AvatarFallback>US</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">username</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            user@example.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Dashboard</Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">
                                Projects
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/projects/active">Active Projects</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/projects/archived">Archived Projects</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/projects/create">Create New Project</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">
                                Team
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/team/members">Team Members</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/team/roles">Roles & Permissions</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/team/invite">Invite New Member</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/reports" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Reports</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <Button variant="ghost" size="icon" className="mr-2">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/avatars/01.png" alt="@username" />
                                            <AvatarFallback>US</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">username</p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                user@example.com
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

