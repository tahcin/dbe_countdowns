document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("darkModeToggle");
    const toggleIcon = document.getElementById("toggleIcon");
    const toggleText = document.getElementById("toggleText");

    // Check and apply the saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleIcon.textContent = "☀️";
        toggleText.textContent = "Light Mode";
    }

    // Toggle dark mode function
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleIcon.textContent = "☀️";
            toggleText.textContent = "Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleIcon.textContent = "🌙";
            toggleText.textContent = "Dark Mode";
        }
    });
});

// Function to update the countdown every second
function startCountdown(id, eventDate) {
    const countdownElement = document.getElementById(id);

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Define event dates
const event1Date = new Date("March 19, 2025 23:30:00").getTime();
const event2Date = new Date("March 19, 2025 23:30:00").getTime();
const event3Date = new Date("March 19, 2025 23:30:00").getTime();
const event4Date = new Date("March 26, 2025 23:30:00").getTime();

// Start countdowns
startCountdown("timer1", event1Date);
startCountdown("timer2", event2Date);
startCountdown("timer3", event3Date);
startCountdown("timer4", event4Date);


//buttons
document.addEventListener("DOMContentLoaded", function () {
    const buttonLinks = {
        countdown1: "",  
        countdown2: "",
        countdown3: "https://apps.iimbx.edu.in/learning/course/course-v1:IIMBx+PJ21x+BBA_DBE_B1/block-v1:IIMBx+PJ21x+BBA_DBE_B1+type@sequential+block@3f3d99591cb14a9e9a133b3583251766/block-v1:IIMBx+PJ21x+BBA_DBE_B1+type@vertical+block@27405e39773d443288c557c7f97d7822",
        countdown4: ""
    };

    document.querySelectorAll(".event").forEach(eventBox => {
        eventBox.style.cursor = "pointer"; // Make it clear it's clickable

        eventBox.addEventListener("click", function () {
            const eventId = this.id;
            if (buttonLinks[eventId]) {
                window.open(buttonLinks[eventId], "_blank"); // Open in new tab
            }
        });
    });
});

