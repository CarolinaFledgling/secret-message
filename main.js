const inputOne = document.getElementById('pass-1')
const wrapperDiv = document.querySelector('.answer-container__wrapper')

const password = "Ejtminowicz"
const message = "Ale fajnie bo działa"

inputOne.addEventListener('input', (e) => {
    if (password.toLowerCase() === e.target.value.toLowerCase()) {
        wrapperDiv.textContent = message
    } else {
        wrapperDiv.textContent = '';
    }

})