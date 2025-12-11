import React from 'react'
import { getAllProjects } from '../../lib/posts'
import ProjectCard from '../../components/ProjectCard'

export default function Projects({projects}:{projects:any[]}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p=> <ProjectCard key={p.slug} title={p.title} summary={p.summary} slug={p.slug} tags={p.tags||[]}/>)}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return { props: { projects } }
}
