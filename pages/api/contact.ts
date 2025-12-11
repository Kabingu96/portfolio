import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'missing fields' })
  // TODO: wire up to email service or Formspree
  console.log('contact form', { name, email, message })
  return res.status(200).json({ ok: true })
}
