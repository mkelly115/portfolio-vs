"use client"
import Link from "next/link"
import "../footer/styles.css"

export default function Footer() {
    return(
        <nav className="footer">
            <Link href="https://github.com/mkelly115" className="links"> Github </Link>
            <Link href="https://www.linkedin.com/in/michael-andrew-kelly/" className="links"> Linked In </Link>
            <Link href="https://stackoverflow.com/users/23515148/michael-kelly" className="links">Stack Overflow</Link>
        </nav>
    )
}