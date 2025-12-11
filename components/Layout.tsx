import React from 'react'
import Navbar from './Navbar'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Your Name — Cyber-security student
      </footer>
    </div>
  )
}

export default Layout
