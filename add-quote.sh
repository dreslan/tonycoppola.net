#!/bin/bash

# Script to add a new quote to the website
echo "Add a new quote to the website"
echo "==============================="

# Get the author
read -p "Author name: " author

# Sanitize the author name for the filename
author_slug=$(echo "$author" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Get a short title/topic
read -p "Short title/topic for the quote: " title

# Sanitize the topic for the filename
title_slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Create filename
filename="content/quotes/${author_slug}-${title_slug}.md"

# Get the source
read -p "Source (book, article, etc.): " source

# Get the source URL
read -p "Source URL (optional, press enter to skip): " source_url

# Get tags
read -p "Tags (comma-separated): " tags

# Convert tags to YAML format
tags_yaml=""
IFS=',' read -ra TAG_ARRAY <<< "$tags"
for i in "${TAG_ARRAY[@]}"; do
  # Trim whitespace and convert to lowercase
  tag=$(echo "$i" | xargs | tr '[:upper:]' '[:lower:]')
  tags_yaml+="- \"$tag\"\n  "
done

# Get the quote text
echo "Enter the quote text (press Ctrl+D when done):"
quote_text=$(cat)

# Create the file
cat > "$filename" << EOF
---
title: "$title"
date: $(date +%Y-%m-%dT%H:%M:%S%z)
draft: false
author: "$author"
source: "$source"
source_url: "$source_url"
tags: [
  $tags_yaml
]
categories: []
featured: false
---

$quote_text
EOF

echo "Quote added to $filename"
echo "Run 'hugo server' to see the changes"