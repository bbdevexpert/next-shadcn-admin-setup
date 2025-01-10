'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Menu, X } from 'lucide-react'

export function SearchHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary mr-8">
                            Logo
                        </Link>
                        <div className="relative hidden md:block">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-10 w-64"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        </div>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Home</Link></li>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary">
                                        Categories
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <Link href="/categories/electronics">Electronics</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/categories/clothing">Clothing</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/categories/books">Books</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li><Link href="/deals" className="text-sm font-medium text-muted-foreground hover:text-primary">Deals</Link></li>
                            <li><Link href="/support" className="text-sm font-medium text-muted-foreground hover:text-primary">Support</Link></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block">
                        <Button variant="ghost" className="mr-2">Log in</Button>
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
                        <div className="relative px-3 py-2">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-10 w-full"
                            />
                            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        </div>
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Home</Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">
                                Categories
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/categories/electronics">Electronics</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/categories/clothing">Clothing</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/categories/books">Books</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/deals" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Deals</Link>
                        <Link href="/support" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">Support</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <Button variant="ghost" className="mr-2 w-full">Log in</Button>
                            <Button className="w-full">Sign up</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

