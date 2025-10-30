function updateAllClocks() {
    const now = new Date();

    const options = { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" };

    // Get time in each US time zone
    const pstTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/Los_Angeles" });
    const mstTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/Denver" });
    const cstTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/Chicago" });
    const estTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/New_York" });

    // Update the HTML elements
    document.getElementById("pst-clock").textContent = pstTime;
    document.getElementById("mst-clock").textContent = mstTime;
    document.getElementById("cst-clock").textContent = cstTime;
    document.getElementById("est-clock").textContent = estTime;
}

// Run every second
setInterval(updateAllClocks, 1000);
updateAllClocks();

function addBusinessHours(startDate, hoursToAdd) {
    let date = new Date(startDate);
    let addedHours = 0;

    while (addedHours < hoursToAdd) {
        date.setHours(date.getHours() + 1);
        const day = date.getDay();
        const hour = date.getHours();
        // Skip weekends
        if (day !== 0 && day !== 6) {
            addedHours++;
        }
    }
    return date;
}

