// DARK MODE
function toggleDark() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
    
    let modeButton = document.getElementById("dark");
    if(modeButton.innerHTML === "Dark Mode") {
        modeButton.innerHTML = "Light Mode";
    } else {
        modeButton.innerHTML = "Dark Mode";
    }
}

function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

// Update time every second
setInterval(updateTime, 1000);
// Initial call to display time immediately
updateTime();