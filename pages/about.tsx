import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'

const About = () => {
  const raw = fs.readFileSync(path.join(process.cwd(),'content','about.md'),'utf-8')
  const { content } = matter(raw)
  return (
    <div className="prose max-w-none">
      <h1>About me</h1>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
}

export default About
