function updateClock() {
    const now = new Date();

    const options = { timeZone: "America/Chicago", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const cstTime = now.toLocaleTimeString("en-US", options);

    // Display on page
    document.getElementById("cst-clock").textContent = cstTime;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
