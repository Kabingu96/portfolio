import React from 'react'
import Head from 'next/head'
import ContactForm from '../components/ContactForm'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact - James Warren</title>
        <meta name="description" content="Get in touch with James Warren for cybersecurity collaborations, internship opportunities, or project discussions." />
      </Head>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interested in collaborating on cybersecurity projects, discussing internship opportunities, 
            or just want to chat about ethical hacking? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Ways to Reach Me</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">james.warren@example.com</p>
                  <p className="text-sm text-slate-500 mt-1">I typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">LinkedIn</h3>
                  <p className="text-slate-600 mt-1">Connect with me professionally</p>
                  <a 
                    href="https://linkedin.com/in/james-warren" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    linkedin.com/in/james-warren
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">GitHub</h3>
                  <p className="text-slate-600 mt-1">Check out my code and projects</p>
                  <a 
                    href="https://github.com/Kabingu96" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    github.com/Kabingu96
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-2">Looking for collaboration?</h3>
              <p className="text-slate-600 text-sm">
                I'm always interested in cybersecurity projects, CTF competitions, 
                research opportunities, and learning from experienced professionals in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact