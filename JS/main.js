document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("errorMessage");
    // Placeholder credentials
    const DEMO_EMAIL = "admin@school.com";
    const DEMO_PASSWORD = "admin123";
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        // Goes to dashboard once logged in successfully
        window.location.href = "index.html";
    } else {
        error.style.display = "block";
        error.textContent = "Incorrect email or password.";
    }
});