/* global $ */
/* exported onCheckboxDarkThemeToggle */

function DOMLoaded(fn) {
  document.addEventListener("DOMContentLoaded", fn)
}

let params = {
  darkTheme: get("dark-theme") ?? false
}

DOMLoaded(function () {
  // dark theme
  DarkTheme()

  // checkbox
  $("#-checkbox-darktheme-toggle").prop("checked", params.darkTheme)
})

// Utils
function get(key) {
  const i = localStorage.getItem(key)
  return ["true", "false"].includes(i) ? i === "true" : i
}

// Handlers
function onCheckboxDarkThemeToggle(e) {
  params.darkTheme = e.checked
  localStorage.setItem("dark-theme", params.darkTheme)
  DarkTheme()
}

// Dark Theme
function DarkTheme() {
  // setup
  let isDark = params.darkTheme
  const Apply = (...args) => args.forEach(arg => $(arg[0]).toggleClass(arg[1], isDark))

  // apply
  Apply(
    ["#view, body", "bg-to-dark"],
    ["#-container-bottom", "container-to-dark"],
    ["#-container-top-left, #-container-darktheme-toggle, #-container-title", "el-to-dark"],
    ["#-container-generating-link", "some-to-dark"],
    ["#-button-generate", "button-to-dark"]
  )
}
