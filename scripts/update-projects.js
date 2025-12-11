#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Update this with your actual GitHub repositories
const GITHUB_REPOS = {
  'vulnerability-scanner': {
    github: 'https://github.com/Kabingu96/vulnerability-scanner',
    demo: '',
    featured: true
  },
  'ctf-writeups': {
    github: 'https://github.com/Kabingu96/ctf-writeups', 
    demo: '',
    featured: true
  },
  'network-security-monitor': {
    github: 'https://github.com/Kabingu96/network-monitor',
    demo: '',
    featured: false
  },
  'password-security-analyzer': {
    github: 'https://github.com/Kabingu96/password-analyzer',
    demo: '',
    featured: false
  }
};

const PROJECTS_DIR = path.join(__dirname, '..', 'content', 'projects');

function updateProjectFile(filename, repoData) {
  const filePath = path.join(PROJECTS_DIR, `${filename}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File ${filename}.mdx not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/github: ".*"/, `github: "${repoData.github}"`);
  content = content.replace(/demo: ".*"/, `demo: "${repoData.demo}"`);
  content = content.replace(/featured: .*/, `featured: ${repoData.featured}`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filename}.mdx`);
}

Object.entries(GITHUB_REPOS).forEach(([filename, repoData]) => {
  updateProjectFile(filename, repoData);
});

console.log('Projects updated with GitHub links');