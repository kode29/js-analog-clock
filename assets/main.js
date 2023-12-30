// Get references to DOM elements
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch") ;

// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode"){
    // add "Dark class to body and set modeSwitch to "Light mode"
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

    // add click lisener to modeSwitch
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        // check if the "dark" class is current present on the body element
        const isDarkMode = body.classList.contains("dark");
        // console.log(isDarkMode)
        // set modeSwitch text based on "dark" class presence
        modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        // store to localStorage
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    })


const updateTime = () => {
    // console.log("time");
    
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 60) * 360;
    console.log(`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    // console.log(secToDeg);

    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

// call updateTime to set clock hands every second
setInterval(updateTime, 1000);

// call updateTime function on page load
updateTime()