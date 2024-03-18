"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <header className="header">
        <Link href='/' className='flex items-center gap-2 md:py-2'>
            <Image src="/logo-text.png" alt="logo" width={200} height={38}/>
        </Link>
        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <Sheet>
                    <SheetTrigger>
                        <Image 
                            src="/assets/icons/menu.svg" 
                            alt="menu" 
                            width={32} 
                            height={32}
                            className="cursor-pointer"
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content">
                        <>
                        <Image 
                            src='/logo-text.png' 
                            alt="logo" 
                            width={180} 
                            height={20} 
                            className="-mt-14 -ml-8"
                        />
                        <ul className="header-nav_elements">
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname

                                return(
                                    <li 
                                        key={link.route } 
                                        className ={`${isActive &&'gradient-text'} flex whitespace-nowrap p-18 text-dark-700
                                }`}>
                                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                                        <Image 
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>
                        <SignedOut>
                    <Button asChild className='button bg-green-gradient bg-cover'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
                        </>
                    </SheetContent>
                </Sheet>

            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav