import React from 'react'
import { getAllProjects } from '../../lib/posts'
import ProjectCard from '../../components/ProjectCard'

export default function Projects({projects}:{projects:any[]}) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center sm:text-left mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto sm:mx-0">
          A collection of cybersecurity tools, research projects, and technical demonstrations showcasing my skills in ethical hacking and security analysis.
        </p>
      </div>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(p=> 
            <ProjectCard 
              key={p.slug} 
              title={p.title} 
              summary={p.summary} 
              slug={p.slug} 
              tags={p.tags||[]}
            />
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No Projects Yet</h3>
            <p className="text-slate-600">
              I'm currently working on some exciting cybersecurity projects. Check back soon to see my latest work!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return { props: { projects } }
}
