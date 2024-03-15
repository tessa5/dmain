import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn } from '@clerk/nextjs'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex flex-col gap-4 size-full">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28}/>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname

                            return(
                                <li key={link.route } className ={`sidebar-nav_element group ${isActive ? 'bg-ge' : ''}`}
                            )
                        })}
                    </ul>
                </SignedIn>
            </nav>
        </div>
        
    </aside>
  )
}

export default Sidebar
