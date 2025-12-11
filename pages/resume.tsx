import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'

export default function Resume() {
  const raw = fs.readFileSync(path.join(process.cwd(),'content','resume.md'),'utf-8')
  const { content } = matter(raw)
  // Very simple markdown -> HTML conversion isn't included; show raw for now
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      <pre className="whitespace-pre-wrap bg-slate-50 p-4 rounded">{content}</pre>
      <div className="mt-4">
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Download PDF</a>
      </div>
    </div>
  )
}
