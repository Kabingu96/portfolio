import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Read resume content
    const resumePath = path.join(process.cwd(), 'content', 'resume.md')
    const resumeContent = fs.readFileSync(resumePath, 'utf-8')
    const { content, data } = matter(resumeContent)

    // Convert markdown to HTML (basic conversion)
    const htmlContent = content
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${data.name} - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            h1 { color: #2563eb; border-bottom: 2px solid #2563eb; }
            h2 { color: #1e40af; margin-top: 30px; }
            h3 { color: #1e3a8a; }
            li { margin-bottom: 5px; }
            .header { text-align: center; margin-bottom: 30px; }
            .contact { font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${data.name}</h1>
            <div class="contact">${data.title} | ${data.contact} | ${data.location || ''}</div>
          </div>
          <div>${htmlContent}</div>
        </body>
      </html>
    `

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.setContent(html)
    
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' }
    })

    await browser.close()

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename="${data.name}-Resume.pdf"`)
    res.send(pdf)

  } catch (error) {
    console.error('PDF generation error:', error)
    res.status(500).json({ message: 'Error generating PDF' })
  }
}