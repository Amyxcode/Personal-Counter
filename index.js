


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let undoEL= document.getElementById("undo-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function undo () {
    let undo = count - 1
    countEl.textContent=0
    saveEl.textContent -= CountStr
    count=0
}


