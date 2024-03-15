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
                        {navLinks.}
                    </ul>
                </SignedIn>
            </nav>
        </div>
        
    </aside>
  )
}

export default Sidebar
