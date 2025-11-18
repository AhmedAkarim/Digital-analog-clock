/**
 * Write your challenge solution here
 */

// Variable Declarations for digital Clock
const digitalTime = document.getElementById("digitalTime");
const date = document.querySelector(".date");

// Variable Declarations for Analog Clock
const analogClock = document.querySelector(".clock")
const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")


date.style.textAlign = "center"


function updateClock() {
    
    let currentDateAndTime = new Date();

    let hours = currentDateAndTime.getHours() % 12 || 12
    const minutes = currentDateAndTime.getMinutes().toString().padStart(2, "0")
    const seconds = currentDateAndTime.getSeconds().toString().padStart(2, "0")
    const AmPm = currentDateAndTime.getHours >= 12 ? "AM" : "PM"

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    digitalTime.textContent = `${hours} : ${minutes} : ${seconds} : ${AmPm}`
    date.textContent = currentDateAndTime.toLocaleDateString(undefined, options)

    // Logic to update hands on analog Clock
    let secondsInNumber = Number(seconds)
    let minutesInNumber = Number(minutes)
    let hoursInNumber = Number(hours)

    let minuteAngle = minutesInNumber * 6
    let secondAngle = secondsInNumber * 6
    let hourAngle = (hoursInNumber * 30) + (minutesInNumber * 0.5)

    hourHand.style.rotate = `${hourAngle}deg`
    minuteHand.style.rotate = `${minuteAngle}deg`
    secondHand.style.rotate = `${secondAngle}deg`
}

setInterval(updateClock, 1000)
updateClock()
displayNumbers()

// Displaying the numbers on a clock
function displayNumbers() {
    
}
for (let index = 1; index < 13; index++) {
        let finalAngle = index * 30

        let number = document.createElement("div")
        let span = document.createElement("span")

        number.classList.add("number")
        span.textContent = index
        number.style.setProperty("--rotation", `${finalAngle}deg`);
        // span.style.setProperty("--rotate", `${finalAngle}deg`);

        number.appendChild(span)
        analogClock.appendChild(number)
    }

