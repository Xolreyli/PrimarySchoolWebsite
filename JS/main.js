// Login logic
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("errorMessage");
    const DEMO_EMAIL = "admin@school.com";
    const DEMO_PASSWORD = "admin123";

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        window.location.href = "dashboard.html";
    } else {
        error.style.display = "block";
        error.textContent = "Incorrect email or password.";
    }
});

// Logout function
function logout() {
    window.location.href = 'index.html';
}