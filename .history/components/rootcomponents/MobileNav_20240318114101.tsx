import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
  

const MobileNav = () => {
  return (
    <header className="header">
        <Link href='/' className='flex items-center gap'></Link>
    </header>
  )
}

export default MobileNav