import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export function getAllProjects() {
  const dir = path.join(CONTENT_DIR, 'projects')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.mdx'))
  return files.map(filename=>{
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      ...data,
      slug: data.slug || filename.replace(/\.mdx$/, '')
    }
  }).sort((a,b)=> (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

export async function getProjectBySlug(slug: string) {
  const file = path.join(CONTENT_DIR, 'projects', `${slug}.mdx`)
  const mdxSource = fs.readFileSync(file, 'utf-8')
  const { content, data } = matter(mdxSource)
  const mdx = await serialize(content, { scope: data })
  return { mdx, meta: data }
}
