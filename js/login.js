document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const callsign = document.getElementById("callsign").value;
        const password = document.getElementById("password").value;

        // Check if callsign and password are correct (you can modify this logic)
        if (callsign === "babii" && password === "pink") {
            window.location.href = "letter.html"; // Redirect to the desired page
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
