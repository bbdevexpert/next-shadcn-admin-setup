'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X } from 'lucide-react'

export function SimpleHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            Logo
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Home</Link>
                            </li>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary">
                                        Products
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <Link href="/products/software">Software</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/products/hardware">Hardware</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/products/services">Services</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li><Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">About</Link></li>
                            <li><Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block">
                        <Button variant="outline" className="mr-2">Log in</Button>
                        <Button>Sign up</Button>
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
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Home</Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">
                                Products
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/products/software">Software</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/products/hardware">Hardware</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/products/services">Services</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/about" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">About</Link>
                        <Link href="/contact" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Contact</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <Button variant="outline" className="mr-2 w-full">Log in</Button>
                            <Button className="w-full">Sign up</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

