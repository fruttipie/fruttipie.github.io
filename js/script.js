const themeToggle = document.getElementById("theme-toggle");
const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)") //media query
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const itchio = document.getElementById("itchio");

// For setting the theme to match the user's computer's theme.
window.addEventListener("load", () => {
    if (prefersDarkQuery.matches) {
        toggleMode();
    } else {
        setIcon("sun");
    }
});

function setIcon(icon) { // for example: setIcon("moon") will set the icon TO the moon
    if (icon === "moon") {
        moon.classList.remove("hidden");
        sun.classList.add("hidden");
    } else {
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
    }
}

// function that changes the body from light to dark and visa versa:
function toggleMode() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        setIcon("moon");
    } else {
        setIcon("sun");
    }
}

// When the button is pressed, call the toggleMode function.
themeToggle.addEventListener("click", toggleMode);

//if the user CHANGES their theme from dark mode into another mode (light), do this:
prefersDarkQuery.addEventListener("change", toggleMode);
