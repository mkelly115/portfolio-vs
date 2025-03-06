"use client"

import Link from "next/link"
import "../header/styles.css"

export default function Header() {
    return(
        
        <nav className="header">
            <div className="name-card">
                Michael Kelly
            </div>
            <div className="nav-links">
            <Link href="/" className="header">About Me</Link>
            <Link href="projects" className="header">Projects</Link>
            <Link href="resume" className="header">Resume</Link>
            <Link href="contact" className="header">Contact</Link>
            </div>
        </nav>
    )
}