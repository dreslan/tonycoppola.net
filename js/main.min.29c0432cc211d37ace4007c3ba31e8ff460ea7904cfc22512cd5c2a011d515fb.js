const blockingScript=`
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
`;document.write("<script>"+blockingScript+"<\/script>"),document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("theme-toggle"),e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{e==="dark"?(document.documentElement.classList.remove("light-theme"),document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark-theme"),document.documentElement.classList.add("light-theme"),localStorage.setItem("theme","light"))};n.addEventListener("click",()=>{const n=localStorage.getItem("theme")||(e.matches?"dark":"light");t(n==="dark"?"light":"dark")}),e.addEventListener("change",e=>{localStorage.getItem("theme")||t(e.matches?"dark":"light")});const s=()=>{};s(),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href").substring(1);if(!t)return;const n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})})})})