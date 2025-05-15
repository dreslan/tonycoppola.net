# Tony Coppola Personal Website

This repository contains the source code for my personal website, [tonycoppola.net](https://tonycoppola.net).

## Table of Contents
- [Technology Stack](#technology-stack)
- [Site Structure](#site-structure)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
- [Content Management](#content-management)
  - [Creating Posts](#creating-posts)
  - [Creating Projects](#creating-projects)
  - [Managing Quotes](#managing-quotes)
  - [Other Content Types](#other-content-types)
- [Custom Features](#custom-features)
  - [Random Quotes System](#random-quotes-system)
  - [Theme Settings](#theme-settings)
- [Deployment](#deployment)
- [License](#license)
- [Credits](#credits)

## Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions
- **Theme**: Custom minimal theme with light/dark mode

## Site Structure

- `/content/` - Markdown files for all site content
  - `/posts/` - Blog posts
  - `/quotes/` - Quote collection for the random quote feature
  - `/projects/` - Project showcases
  - `/essays/` - Longer-form writing
  - `/series/` - Content series
  - `/videos/` - Video content
  - `/about/` - About me
  - `/resume/` - Resume and professional information
  - `/support.md` - "Buy Me a Coffee" page
- `/themes/minimal-tony/` - Custom theme files
  - `/layouts/` - HTML templates
  - `/assets/css/` - CSS styles
  - `/assets/js/` - JavaScript files
  - `/layouts/shortcodes/` - Custom shortcodes (including random-quote)
- `/static/` - Static assets
- `/archetypes/` - Templates for new content

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

## Content Management

### Creating Posts

To create a new blog post:

```bash
hugo new posts/my-new-post.md
```

The default front matter template includes:

```yaml
---
title: "My New Post"
date: 2023-05-20T12:00:00-04:00
draft: false
tags: ["tag1", "tag2"]
---

Content goes here...
```

### Creating Projects

To create a new project:

```bash
hugo new projects/project-name.md
```

Front matter structure for projects:

```yaml
---
title: "Project Title"
date: 2023-05-20T12:00:00-04:00
draft: false
description: "Brief description of the project"
tags: ["tag1", "tag2"]
---

Project details...
```

### Managing Quotes

#### Adding Quotes Using the Script

For easy quote addition, use the provided script:

```bash
./add-quote.sh
```

Follow the prompts to enter author, source, tags, and the quote text.

#### Adding Quotes Manually

1. Create a new file in `content/quotes/` with a format of `author-topic.md`
2. Include the following front matter:

```yaml
---
title: "Quote Title"
date: 2023-05-20T12:00:00-04:00
draft: false
author: "Author Name"
source: "Source (book, article, speech, etc.)"
source_url: "https://link-to-source.com" # Optional
tags: ["tag1", "tag2"]
featured: false # Set to true for important quotes
---

The quote text goes here.
```

The quotes appear:
- Randomly on the homepage in the quote widget
- In a complete listing on the `/quotes/` page
- In tag collections when filtered

### Other Content Types

```bash
# Create an essay
hugo new essays/my-essay.md

# Create a series index
hugo new series/series-name/_index.md

# Add to your resume section
hugo new resume/job-experience.md
```

## Custom Features

### Random Quotes System

The site includes a custom-built quotes system that:
- Displays a random quote on page load
- Allows users to see a new random quote by clicking the refresh button
- Properly formats multi-paragraph quotes and preserves HTML formatting

To add the random quote widget to any page, use the shortcode:

```
{{< random-quote >}}
```

The quote system is implemented using:
- Individual markdown files in `content/quotes/`
- Client-side JavaScript for randomization
- The custom shortcode defined in `themes/minimal-tony/layouts/shortcodes/random-quote.html`

### Theme Settings

The theme includes several customizable features:

1. **Light/Dark Mode Toggle**: Users can switch between light and dark mode
   - CSS variables for each theme are in `themes/minimal-tony/assets/css/main.css`

2. **Typography**: The site uses Google Fonts "Newsreader"
   - Font settings can be modified in the CSS variables

3. **Colors**: Color scheme defined in CSS variables
   - Light theme colors: Lines 10-22 in main.css
   - Dark theme colors: Lines 41-52 in main.css

4. **Layout Settings**: The site uses a responsive layout
   - Main content width: `--max-width: 720px`
   - Narrower content width: `--narrow-width: 650px`

## Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the main branch. See the workflow file in `.github/workflows/hugo-deploy.yml` for details.

To build the site manually:

```bash
hugo --minify
```

This generates the static site in the `public/` directory.

## License

All content is © Tony Coppola unless otherwise noted.

## Credits

The initial site template and structure were designed with assistance from [Claude](https://anthropic.com/claude) by Anthropic. Subsequent modifications and content are by Tony Coppola.