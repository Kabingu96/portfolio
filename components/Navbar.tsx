import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">Your Name</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/about">About</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
