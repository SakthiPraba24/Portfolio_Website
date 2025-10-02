
// ===== THEME TOGGLE =====
const themeBtn = document.querySelector(".theme-btn")
const body = document.body

// Check for saved theme preference



// Default to dark theme
let currentTheme = localStorage.getItem("theme")

if (!currentTheme) {
  // Default is dark
  body.classList.add("dark-theme")
  themeBtn.classList.add("sun")
  localStorage.setItem("theme", "dark-theme")
} else {
  body.classList.add(currentTheme)
  if (currentTheme === "dark-theme") {
    themeBtn.classList.add("sun")
  }
}





themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme")
  themeBtn.classList.toggle("sun")

  // Save theme preference
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme")
  } else {
    localStorage.setItem("theme", "")
  }
})

