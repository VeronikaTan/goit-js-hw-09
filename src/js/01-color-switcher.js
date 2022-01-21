
const buttonStartEl = document.querySelector('button[data-start]')
const stopEl = document.querySelector('button[data-stop]')
const bodyEl = document.querySelector('body')

let frequentEvent = null


// bodyEl.addEventListener('change', )

stopEl.disabled = true

buttonStartEl.addEventListener('click', () => {

frequentEvent = setInterval(() => {bodyEl.style.background = getRandomHexColor()}, 1000)
   buttonStartEl.disabled = true
    stopEl.disabled = false
});
    

stopEl.addEventListener('click', () => {
    clearInterval(frequentEvent)
    
    stopEl.disabled = true
    buttonStartEl.disabled = false
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}console.dir(buttonStopEl)