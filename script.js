function updateClock() {
    const now = new Date();

    // Get CST (auto handles daylight saving)
    const options = { timeZone: "America/Chicago", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const cstTime = now.toLocaleTimeString("en-US", options);

    console.log(cstTime);
}

updateClock();
