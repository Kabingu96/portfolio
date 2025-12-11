import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'

export default function Resume({ content }: { content: string }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-0">Resume</h1>
        <a 
          href="/api/resume-pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>
      </div>
      
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="prose prose-slate max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base leading-relaxed text-slate-700">
            {content}
          </pre>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const raw = fs.readFileSync(path.join(process.cwd(),'content','resume.md'),'utf-8')
  const { content } = matter(raw)
  return { props: { content } }
}
