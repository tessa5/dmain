import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
  

const MobileNav = () => {
  return (
    <header className="header">
        <Link href='/' className='flex items-center gap-2 md:py-2'>
            <Image src="/logo-text.png" alt="logo" width={200} height={38}/>
        </Link>
        <nav className="flex gap-2">
            <SignedIn>
                <User
            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav