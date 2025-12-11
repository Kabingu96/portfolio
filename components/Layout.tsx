import React from 'react'
import Navbar from './Navbar'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1 max-w-4xl">{children}</main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-4 sm:py-6 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors">
        <div className="container mx-auto px-4 sm:px-6">
          © {new Date().getFullYear()} James Kabingu Mbugua — Cybersecurity Student
        </div>
      </footer>
    </div>
  )
}

export default Layout
