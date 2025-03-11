"use client"

import Link from "next/link"
import "../header/styles.css"

export default function Header() {
    return(

        // Maybe I should redirect to home and have a seperate about me page?
        // Need to look into it further for what could look good
        
        <nav className="header">
            <div className="name-card">
                Michael Kelly
            </div>
            <div className="nav-links">
            <Link href="/" className="header">Home</Link>
            <Link href="about" className="header">About </Link>
            <Link href="projects" className="header">Projects</Link>
            <Link href="resume" className="header">Resume</Link>
            <Link href="contact" className="header">Contact</Link>
            </div>
        </nav>
    )
}