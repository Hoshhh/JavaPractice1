/*let myName = "Hosh"
let greeting = "Hi, my name is "
let myGreeting = greeting + myName

console.log(myGreeting)
*/

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

console.log(saveEl)


function increment(){
    //console.log("Button was clicked!")
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save(){
    let myEntries = count + " - "
    saveEl.textContent += myEntries
    console.log(count)
    count = 0
    countEl.textContent = count
}
