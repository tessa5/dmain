import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SignedIn, UserButton } from "@clerk/nextjs"
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
                        alt="logo" width={180} height={20} className="-mt-14 -ml-8"/>
                        </>
                    </SheetContent>
                </Sheet>

            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav