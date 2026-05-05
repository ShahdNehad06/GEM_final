console.log("dark.js loaded");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-btn");

  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }
});