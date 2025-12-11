import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  summary: string
  slug: string
  tags?: string[]
}

const ProjectCard: React.FC<Props> = ({title, summary, slug, tags=[]}) => {
  return (
    <article className="border rounded-lg p-4 hover:shadow-md transition">
      <h3 className="text-lg font-semibold"><Link href={`/projects/${slug}`}>{title}</Link></h3>
      <p className="text-sm text-slate-600 mt-2">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t=> <span key={t} className="text-xs border rounded px-2 py-1">{t}</span>)}
      </div>
    </article>
  )
}

export default ProjectCard
