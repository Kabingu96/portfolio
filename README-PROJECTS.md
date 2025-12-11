# Project Integration Guide

## Your GitHub Projects Integration

I've created template projects based on common cybersecurity work. To integrate your actual GitHub repositories:

### 1. Update Project Templates

Edit these files in `content/projects/` with your actual project details:

- `vulnerability-scanner.mdx` - Web security scanner project
- `ctf-writeups.mdx` - CTF competition writeups
- `network-security-monitor.mdx` - Network monitoring tool
- `password-security-analyzer.mdx` - Password security tool

### 2. Quick Update Script

Run the update script to set GitHub links:

```bash
node scripts/update-projects.js
```

Then edit `scripts/update-projects.js` to match your actual repository names.

### 3. Add More Projects

To add additional projects from your GitHub:

1. Create new `.mdx` files in `content/projects/`
2. Use this template structure:

```markdown
---
title: "Project Name"
summary: "Brief description"
date: "2024-12-11"
tags: ["tag1", "tag2"]
github: "https://github.com/Kabingu96/repo-name"
demo: "https://demo-url.com"
featured: true
---

# Project Name

Project content here...
```

### 4. Project Categories

Based on your GitHub username (Kabingu96), I've created projects for:

- **Web Security Tools** - Vulnerability scanners, security testing
- **CTF Writeups** - Competition solutions and methodologies  
- **Network Security** - Monitoring and analysis tools
- **Password Security** - Authentication and credential analysis

### 5. Customization

For each project, update:

- **Problem/Solution sections** - Your actual approach
- **Technical details** - Real implementation specifics
- **Results/metrics** - Actual achievements and outcomes
- **Code snippets** - Your real code examples
- **Screenshots** - Add to `public/projects/` folder

### 6. GitHub Integration

The portfolio automatically links to your GitHub repositories. Make sure your repos have:

- Clear README files
- Proper documentation
- Screenshots or demos
- Security considerations (important for cybersecurity projects)

### Next Steps

1. Review and customize each project template
2. Add screenshots to `public/projects/`
3. Update GitHub repository links
4. Add any additional projects you want to showcase
5. Test the portfolio locally with `npm run dev`