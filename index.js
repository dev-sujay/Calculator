const screenEl = document.querySelector("#screen")
const userInputEl = document.querySelector("#user-input")
const resultEl = document.querySelector("#result")


let displayString = ""



one.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 1
    userInputEl.innerHTML = displayString

})
two.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 2
    userInputEl.innerHTML = displayString

})
three.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 3
    userInputEl.innerHTML = displayString

})
four.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 4
    userInputEl.innerHTML = displayString

})
five.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 5
    userInputEl.innerHTML = displayString

})
six.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 6
    userInputEl.innerHTML = displayString

})
seven.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 7
    userInputEl.innerHTML = displayString

})
eight.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 8
    userInputEl.innerHTML = displayString

})
nine.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 9
    userInputEl.innerHTML = displayString

})
zero.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString += 0
    userInputEl.innerHTML = displayString

})
del.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString = displayString.slice(0, -1)
    //start slicing from 0 index upto -1 index but does not slice the -1 ,mans last index, and returns sliced string 
    userInputEl.innerHTML = displayString

})
allClr.addEventListener('click', function () {
    resultEl.innerHTML = ""
    displayString = ""
    userInputEl.innerHTML = ""
    console.clear();
})
devide.addEventListener('click', function () {
    resultEl.innerHTML = ""
    if (displayString != "") {
        displayString += "/"
        userInputEl.innerHTML = displayString
    }
})
multiply.addEventListener('click', function () {
    resultEl.innerHTML = ""
    if (displayString != "") {
        displayString += "*"
        userInputEl.innerHTML = displayString
    }
})
plus.addEventListener('click', function () {
    resultEl.innerHTML = ""
    if (displayString != "") {
        displayString += "+"
        userInputEl.innerHTML = displayString
    }
})
minus.addEventListener('click', function () {
    resultEl.innerHTML = ""
    if (displayString != "") {
        displayString += "-"
        userInputEl.innerHTML = displayString
    }
})
decimal.addEventListener('click', function () {
    resultEl.innerHTML = ""

    displayString += "."
    userInputEl.innerHTML = displayString

})
remain.addEventListener('click', function () {
    resultEl.innerHTML = ""
    if (displayString != "") {
        displayString += "%"
        userInputEl.innerHTML = displayString
    }
})



equal.addEventListener('click', function () {
    if (displayString.includes("+") || displayString.includes("-") || displayString.includes("/") || displayString.includes("*") || displayString.includes("%")) {

        displayString = eval(displayString)
        resultEl.innerHTML = displayString
        displayString = ""
    }
})





