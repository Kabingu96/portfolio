import React from 'react'
import { getAllProjects, getProjectBySlug } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'

export default function Project({mdx, meta}:{mdx:any, meta:any}) {
  return (
    <article>
      <h1 className="text-2xl font-bold">{meta.title}</h1>
      <p className="text-sm text-slate-600">{meta.date} • {meta.type?.join?.(', ')}</p>
      <div className="mt-4 prose max-w-none"><MDXRemote {...mdx} /></div>
    </article>
  )
}

export async function getStaticPaths() {
  const projects = getAllProjects()
  return {
    paths: projects.map(p=> ({ params: { slug: p.slug }})),
    fallback: false
  }
}

export async function getStaticProps({params}:{params:any}) {
  const data = await getProjectBySlug(params.slug)
  return { props: { mdx: data.mdx, meta: data.meta } }
}
