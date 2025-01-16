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