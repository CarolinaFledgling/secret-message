const inputOne = document.getElementById('pass-1')
const wrapperDiv = document.querySelector('.answer-container__wrapper')

const passwordOne = "Norway"
const messageOne = "Yes! I have been living in Oslo for the last 5 years. 🙈 "

inputOne.addEventListener('input', (e) => {
    if (passwordOne.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageOne
    } else {
        wrapperDiv.textContent = '';
    }

})

const passwordTwo = "Winter"
const messageTwo = "Of course Winter ! There are many reason why I love winter: reason first -  building snowmen and having snowball fights, reason second - Christmas lights, reason third - The smell of fresh winter air plus The smell of bonfires, reason fourth - Snuggling up to someone you love, reason fifth - Gingerbread houses etc  🙊 "

const inputTwo = document.getElementById('pass-2')

inputTwo.addEventListener('input', (e) => {
    if (passwordTwo.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageTwo
    } else {
        wrapperDiv.textContent = '';
    }
})

const passwordThree = "Bayern Monachium"
const messageThree = "Yes , They are really good. They won 6 times in the Champions League. Btw, I love watching and playing football.🤪"
const inputThree = document.getElementById('pass-3')


inputThree.addEventListener('input', (e) => {
    if (passwordThree.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageThree
    } else {
        wrapperDiv.textContent = '';
    }

})


const passwordFour = "Yes"
const messageFour = "I love watching Harry Potter. Did you know  If you play the Harry Potter movies without stopping, it takes 19 hours and 39 minutes. 😝 "
// messageFour.style.color = "red"
const inputFour = document.getElementById('pass-4')


inputFour.addEventListener('input', (e) => {
    if (passwordFour.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = messageFour
    } else {
        wrapperDiv.textContent = '';
    }

})