import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex flex-col gap-4 size-full">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/"
            </Link>
        </div>
        
    </aside>
  )
}

export default Sidebar
