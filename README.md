# Tony Coppola Personal Website

This repository contains the source code for my personal website, [tonycoppola.net](https://tonycoppola.net).

## Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions
- **Theme**: Custom minimal theme with light/dark mode

## Site Structure

- `/content/` - Markdown files for all site content
  - `/blog/` - Blog posts
  - `/essays/` - Longer-form writing
  - `/projects/` - Project showcases
  - `/series/` - Content series
  - `/videos/` - Video content
  - `/about/` - About me
  - `/resume/` - Resume and "Hire Me" information
  - `/support.md` - "Buy Me a Coffee" page
- `/themes/minimal-tony/` - Custom theme files
- `/static/` - Static assets
- `/assets/` - SCSS/JS files for processing

## Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/getting-started/installing/) (latest version)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Start the Hugo development server
hugo server -D
```

Visit http://localhost:1313/ to see the site.

### Creating New Content

```bash
# Create a new blog post
hugo new blog/my-new-post.md

# Create a new project page
hugo new projects/project-name.md

# Creating other content types
hugo new essays/my-essay.md
hugo new series/series-name/_index.md
```

### Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the main branch. See the workflow file in `.github/workflows/hugo-deploy.yml` for details.

## License

All content is © Tony Coppola unless otherwise noted.

## Credits

The initial site template and structure were designed with assistance from [Claude](https://anthropic.com/claude) by Anthropic. Subsequent modifications and content are by Tony Coppola.