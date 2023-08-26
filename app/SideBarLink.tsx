'use client'
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

const SideBarLink = ({ title, href  } : { title : string, href : string }) => {

    const currentSegment = useSelectedLayoutSegment()
    let color = currentSegment === href.replace('/','') ? "yellow" : "black";

    if(!currentSegment && href=== '/' ) {
        color = 'yellow'
    }

    return (
        <Link href={href} style={{ color }} >
            {title}
        </Link>
    )
}

export default SideBarLink