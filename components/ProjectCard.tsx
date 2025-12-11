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
    <article className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 group">
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        <Link href={`/projects/${slug}`} className="block">
          {title}
        </Link>
      </h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
        {summary}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
        <Link 
          href={`/projects/${slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Read more 
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
