"use client"

import Link from "next/link"
import "../header/styles.css"

export default function Header() {
    return(
        <nav className="header">
            <Link href="/" className="header">About Me</Link>
            <Link href="Projects" className="header">Projects</Link>
            <Link href="Resume" className="header">Resume</Link>
            <Link href="contact" className="header">Contact</Link>
        </nav>
    )
}