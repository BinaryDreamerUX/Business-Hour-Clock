// Calculate future date skipping weekends
function addBusinessHours(startDate, hoursToAdd) {
    let date = new Date(startDate);
    let addedHours = 0;

    while (addedHours < hoursToAdd) {
        date.setHours(date.getHours() + 1);
        const day = date.getDay();
        // Skip weekends (0 = Sunday, 6 = Saturday)
        if (day !== 0 && day !== 6) {
            addedHours++;
        }
    }
    return date;
}

function updateAllClocks() {
    const now = new Date();

    const options = { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const dateOptions = { weekday: "short", year: "numeric", month: "short", day: "numeric" };

    // Current time in each US time zone
    const pstTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/Los_Angeles" });
    const mstTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/Denver" });
    const cstTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/Chicago" });
    const estTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "America/New_York" });

    const pstDate = now.toLocaleDateString("en-US", { ...dateOptions, timeZone: "America/Los_Angeles" });
    const mstDate = now.toLocaleDateString("en-US", { ...dateOptions, timeZone: "America/Denver" });
    const cstDate = now.toLocaleDateString("en-US", { ...dateOptions, timeZone: "America/Chicago" });
    const estDate = now.toLocaleDateString("en-US", { ...dateOptions, timeZone: "America/New_York" });

    // Future time (48 business hours later)
    const pstFuture = addBusinessHours(new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })), 48);
    const mstFuture = addBusinessHours(new Date(now.toLocaleString("en-US", { timeZone: "America/Denver" })), 48);
    const cstFuture = addBusinessHours(new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" })), 48);
    const estFuture = addBusinessHours(new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" })), 48);

    const pstFutureTime = pstFuture.toLocaleTimeString("en-US", options);
    const mstFutureTime = mstFuture.toLocaleTimeString("en-US", options);
    const cstFutureTime = cstFuture.toLocaleTimeString("en-US", options);
    const estFutureTime = estFuture.toLocaleTimeString("en-US", options);

    const pstFutureDate = pstFuture.toLocaleDateString("en-US", dateOptions);
    const mstFutureDate = mstFuture.toLocaleDateString("en-US", dateOptions);
    const cstFutureDate = cstFuture.toLocaleDateString("en-US", dateOptions);
    const estFutureDate = estFuture.toLocaleDateString("en-US", dateOptions);

    // Update current clocks
    document.getElementById("pst-clock").textContent = `${pstDate} ${pstTime}`;
    document.getElementById("mst-clock").textContent = `${mstDate} ${mstTime}`;
    document.getElementById("cst-clock").textContent = `${cstDate} ${cstTime}`;
    document.getElementById("est-clock").textContent = `${estDate} ${estTime}`;

    // Update future clocks
    document.getElementById("pst-future-clock").textContent = `${pstFutureDate} ${pstFutureTime}`;
    document.getElementById("mst-future-clock").textContent = `${mstFutureDate} ${mstFutureTime}`;
    document.getElementById("cst-future-clock").textContent = `${cstFutureDate} ${cstFutureTime}`;
    document.getElementById("est-future-clock").textContent = `${estFutureDate} ${estFutureTime}`;
}

// Run every second
setInterval(updateAllClocks, 1000);
updateAllClocks();
