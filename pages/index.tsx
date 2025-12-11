import React from 'react'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import { getAllProjects } from '../lib/posts'

export default function Home({projects}:{projects:any[]}) {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Hi — I'm Your Name</h1>
        <p className="text-slate-700 mt-2">Cyber-security student. I solve CTFs, write-ups, and build small security tools. <br/> Looking for internships or collaborations.</p>
        <div className="mt-4">
          <Link href="/projects" className="inline-block px-4 py-2 border rounded">See projects</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0,4).map(p=> <ProjectCard key={p.slug} title={p.title} summary={p.summary} slug={p.slug} tags={p.tags||[]}/>)}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return { props: { projects } }
}
