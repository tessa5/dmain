import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
  

const MobileNav = () => {
  return (
    <header className="header">
        <Link href='/' className='flex items-center gap-2 md:py-2'>
            <Image src="/logo-text.png" alt="logo" width={2000} height={18}/>
        </Link>
    </header>
  )
}

export default MobileNav