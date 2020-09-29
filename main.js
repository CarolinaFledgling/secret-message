const inputOne = document.getElementById('pass-1')
const wrapperDiv = document.querySelector('.answer-container__wrapper')

const passwordOne = "Ejtminowicz"
const messageOne = "Brawo! ciężko napisać jej nazwisko prawda 🙈 "

inputOne.addEventListener('input', (e) => {
    if (passwordOne.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageOne
    } else {
        wrapperDiv.textContent = '';
    }

})

const passwordTwo = "Kulińska"
const messageTwo = "Tak, wiem mało kto pamięta o literce ń 🙊 "

const inputTwo = document.getElementById('pass-2')

inputTwo.addEventListener('input', (e) => {
    if (passwordTwo.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageTwo
    } else {
        wrapperDiv.textContent = '';
    }
})

const passwordThree = "Nie"
const messageThree = "Oczywiście, że nie kochamy 🤪 "
// messageThree.style.lineHeight = "1.8rem"
const inputThree = document.getElementById('pass-3')


inputThree.addEventListener('input', (e) => {
    if (passwordThree.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageThree
    } else {
        wrapperDiv.textContent = '';
    }

})


const passwordFour = "tak"
const messageFour = "Tak, jesteśmy i to już 7 lat 🌈 "
// messageThree.style.lineHeight = "1.8rem"
const inputFour = document.getElementById('pass-4')


inputFour.addEventListener('input', (e) => {
    if (passwordFour.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageFour
    } else {
        wrapperDiv.textContent = '';
    }

})