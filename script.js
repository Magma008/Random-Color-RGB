const button = document.querySelector(".button")
const bg = document.querySelector(".main")
const value = document.querySelector(".value")

button.addEventListener("click", () => {
    let box = `rgb(${firstNum()}, ${secondNum()}, ${thirdNum()})`
    value.textContent = box
    bg.style.background = box
    value.style.color = box
})

function firstNum() {
    return Math.floor(Math.random() * 256)
}

function secondNum() {
    return Math.floor(Math.random() * 256)
}

function thirdNum() {
    return Math.floor(Math.random() * 256)
}