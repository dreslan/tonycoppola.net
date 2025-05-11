// Add this script to the <head> section of your base template
// This prevents the flash by applying the theme immediately before rendering
const blockingScript = `
(function() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Determine which theme to use
  let currentTheme;
  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
  }
  
  // Apply theme to document immediately
  document.documentElement.classList.add(currentTheme + '-theme');
})();
`;

// Add this to your head section as an inline script
document.write('<script>' + blockingScript + '</script>');

// Then update your existing script for the toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Function to set the theme
  const setTheme = (mode) => {
    if (mode === 'dark') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };
  
  // We don't need to set the theme again here since we already did it
  // in the blocking script above
  
  // Handle toggle button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
  
  // Listen for system preference changes
  prefersDarkScheme.addEventListener('change', (e) => {
    // Only update theme automatically if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // Handle mobile navigation if needed for smaller screens
  const setupMobileNav = () => {
    // This can be expanded upon if you need a mobile menu toggle
    // For now, your navigation is simple enough that it can be responsive with CSS
  };
  setupMobileNav();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return; // Skip if it's just "#"
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});