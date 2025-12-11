import React from 'react'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import { getAllProjects } from '../lib/posts'

export default function Home({projects}:{projects:any[]}) {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-8 sm:py-12">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            Hi — I'm <span className="text-blue-600 dark:text-blue-400">James Kabingu</span>
          </h1>
          <p className="mt-6 text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-[680px]">
            Cybersecurity student. I research web app security and write CTF writeups.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Currently seeking cybersecurity internships and collaborative projects.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projects" 
              className="group inline-flex items-center justify-center px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200 relative overflow-hidden"
            >
              <span className="relative z-10">See projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="absolute inset-0 bg-slate-900 dark:bg-slate-100 group-hover:bg-transparent transition-colors duration-200" />
            </Link>
            <Link 
              href="/api/resume-pdf" 
              className="inline-flex items-center justify-center px-5 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400">$ whoami</div>
                <div className="text-slate-300 mt-1">kabingu@security:~$ ethical_hacker</div>
                <div className="text-blue-400 mt-2">$ cat skills.txt</div>
                <div className="text-slate-300 mt-1">• Web Application Security</div>
                <div className="text-slate-300">• CTF Competitions</div>
                <div className="text-slate-300">• Penetration Testing</div>
                <div className="text-slate-300">• Digital Forensics</div>
                <div className="text-green-400 mt-2 animate-pulse">█</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <Link 
            href="/projects" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.slice(0,4).map(p=> 
            <ProjectCard 
              key={p.slug} 
              title={p.title} 
              summary={p.summary} 
              slug={p.slug} 
              tags={p.tags||[]}
            />
          )}
        </div>
        {projects.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-lg">No projects yet. Check back soon!</p>
          </div>
        )}
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return { props: { projects } }
}
