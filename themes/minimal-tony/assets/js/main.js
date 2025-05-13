// Shared utility functions for theme management
const themeUtils = {
  // Get the user's preferred theme from localStorage or system preferences
  getPreferredTheme: function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
      return savedTheme;
    } else {
      return prefersDarkScheme.matches ? 'dark' : 'light';
    }
  },
  
  // Apply the theme to the document
  setTheme: function(mode) {
    if (mode === 'dark') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
};

// Immediately apply theme on page load to prevent flash
(function() {
  const currentTheme = themeUtils.getPreferredTheme();
  themeUtils.setTheme(currentTheme);
})();

// Set up event listeners once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Handle toggle button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = themeUtils.getPreferredTheme();
    themeUtils.setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
  
  // Listen for system preference changes
  prefersDarkScheme.addEventListener('change', (e) => {
    // Only update theme automatically if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      themeUtils.setTheme(e.matches ? 'dark' : 'light');
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