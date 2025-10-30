function updateAllClocks() {
    const now = new Date();

    const options = { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };

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
