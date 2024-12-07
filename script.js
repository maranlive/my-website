
// Highlight Navigation Links on Hover
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#4CAF50";
        link.style.color = "white";
    });

    link.addEventListener("mouseout", () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "white";
    });
});
// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.createElement("button");
    themeButton.innerText = "Toggle Dark Mode";
    themeButton.style.cssText = "position:fixed;top:10px;right:10px;padding:10px;";
    themeButton.addEventListener("click", toggleTheme);
    document.body.appendChild(themeButton);
});
// Display Current Date and Time
function showDateTime() {
    const now = new Date();
    const dateTimeElement = document.querySelector("#current-datetime");
    if (dateTimeElement) {
        dateTimeElement.innerText = `Current Date & Time: ${now.toLocaleString()}`;
    }
}

document.addEventListener("DOMContentLoaded", showDateTime);
// Show Alert on Button Click
function showWelcomeMessage() {
    alert("Welcome to Dr. A. Manimaran's Academic Profile!");
}
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.2)";
        link.style.transition = "0.3s ease";
    });

    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    });
});






