const eventsData = [
    "Event 1 - Date 1",
    "Event 2 - Date 2",
    "Event 3 - Date 3"
];

// Sample achievement data
const achievementsData = [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
];

// Update content dynamically
document.getElementById("event-list").innerHTML = eventsData.map(event => <li>${event}</li>).join('');
document.getElementById("achievements-list").innerHTML = achievementsData.map(achievement => <li>${achievement}</li>).join('')