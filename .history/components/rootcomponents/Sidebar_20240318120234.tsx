"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <aside className="sidebar">
        <div className="flex flex-col gap-4 size-full">
            <Link href="/" className="sidebar-logo">
                <Image src="/logo.png" alt="logo" width={100} height={18}/>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul>
                        {navLinks.slice(0,6).map((link) => {
                            const isActive = link.route === pathname

                            return(
                                <li key={link.route } className ={`sidebar-nav_element group ${isActive ? 'bg-green-500 text-white' : 'text-gray-600'
                            }`}>
                                <Link className="sidebar-link" href={link.route}>
                                    <Image 
                                        src={link.icon}
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        className={`${isActive && 'brightness-150'}`}
                                    />
                                    {link.label}
                                </Link>
                            </li>
                            )
                        })}
                        </ul>
                        <ul className='sidebar-nav_elements'>
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname

                                return(
                                    <li key={link.route } className ={`sidebar-nav_element group ${isActive ? 'bg-green-400 text-white' : 'text-gray-600'
                                }`}>
                                    <Link className="sidebar-link" href={link.route}>
                                        <Image 
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-150'}`}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                                )
                            })}

                        <li className='flex-center gap-2  p-4 cursor-pointer'>
                            <UserButton afterSignOutUrl='/' showName/>
                        </li>
                    </ul>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-green-gradient bg-cover'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
        
    </aside>
  )
}

export default Sidebar
