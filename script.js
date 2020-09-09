setInterval(setClock, 1000)

const hourTime = document.querySelector('[data-hour-Time]')
const minuteTime = document.querySelector('[data-minute-Time]')
const secondTime = document.querySelector('[data-second-Time]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(hourTime, hoursRatio)
    setRotation(minuteTime, minutesRatio)
    setRotation(secondTime, secondsRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)

}
 setClock()
