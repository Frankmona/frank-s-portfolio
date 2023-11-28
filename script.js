// Check for saved theme preference in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Dark mode toggle function
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's theme preference to local storage
  const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
  localStorage.setItem('theme', theme);
}

// Event listener for dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
