//Sample events
const events = [
    { id: 1, name: "Football game", date: "2024-11-11" },
    { id: 2, name: "Hockey game", date: "2024-11-15" }
];

function renderCalendar() {

    const calendar = document.getElementById("calendar"); // Get the calendar container

    for (let day = 1; day <= 30; day++) {

        //Create a div for each day
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day; // Displaying the day number

        // Check if there is an event for this day
        const event = events.find(e => e.date === `2024-11-${String(day).padStart(2, '0')}`);

        if (event) {
            const eventDiv = document.createElement("div");
            eventDiv.className = "event";
            eventDiv.textContent = event.name;
            dayDiv.appendChild(eventDiv);
        }

        calendar.appendChild(dayDiv);
    }

}

renderCalendar();