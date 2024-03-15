import Link from 'next/link'
import Image f
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex flex-col gap-4 size-full">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo-text.svg" alt="logo" width="300" height="300"/>
            </Link>
        </div>
        
    </aside>
  )
}

export default Sidebar
