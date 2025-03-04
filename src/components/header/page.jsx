"use client"

import Link from "next/link"
import "../header/styles.css"

export default function Header() {
    return(
        <nav>
            <Link href="/">About Me</Link>
            <Link href="Projects">Projects</Link>
        </nav>
    )
}