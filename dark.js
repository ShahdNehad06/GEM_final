document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector("i");

  // load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    const isDark = document.body.classList.toggle("dark");

    // change icon
    if (isDark) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }

    // save
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
