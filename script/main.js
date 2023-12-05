// Good luck on JING write your code here
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateUsernameRegEx,
  validateUsernameRegEx2,
} from './validate.js'
const randomColor = document.querySelector('#rainbow')
const randomColorBtn = randomColor.getElementsByTagName('button')[0]

const sallyBackpack = document.getElementById('backpack')
const addingBtn = sallyBackpack.getElementsByTagName('button')[0]

const login = document.getElementById('input-list')
const submitBtn = login.getElementsByTagName('button')[0]

// TODO adding event
randomColorBtn.addEventListener('click', randomRainbow)
addingBtn.addEventListener('click', addingBackpack)
submitBtn.addEventListener('click', loggingInHandler)

function randomRainbow(e) {
  const rainbowColor = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6']
  const randomColor =
    rainbowColor[Math.floor(Math.random() * rainbowColor.length)]
  const parent = e.target.parentElement
  parent.style.backgroundColor = randomColor
}

function addingBackpack() {
  const inputValue = sallyBackpack.getElementsByTagName('input')[0].value
  const errorMsg = sallyBackpack.querySelector('.error')
  if (inputValue.length === 0 || inputValue === null) {
    errorMsg.innerHTML = 'Invalid input or input is empty.'
    errorMsg.style.color = 'red'
    errorMsg.style.backgroundColor = 'yellow'
    console.log('error msg')
  } else {
    const newList = document.createElement('li')
    newList.innerText = inputValue
    const ulElement = sallyBackpack.querySelector('div#listItem ul')
    ulElement.appendChild(newList)
  }
  setTimeout(() => {
    errorMsg.innerHTML = ''
    errorMsg.style = ''
    console.log('error msg timeout!')
  }, 3000)
}

function loggingInHandler(e) {
  e.preventDefault()
  const username = login.getElementsByTagName('input')[0].value
  const email = login.getElementsByTagName('input')[1].value
  const password = login.getElementsByTagName('input')[2].value

  if (!validateUsernameRegEx2(username)) {
    const errorMsg = login.querySelector('.error')
    errorMsg.innerHTML = 'Username should have a-z A-Z 0-9'
    errorMsg.style.color = 'red'
    errorMsg.style.backgroundColor = 'yellow'
    console.log('error username :', username)
  } else {
    console.log('valid username')
    const errorMsg = login.querySelector('.error')
    errorMsg.innerHTML = ''
  }

  if (!validateEmail(email)) {
    const errorMsg = login.querySelector('.error')
    errorMsg.innerHTML = 'Invalid email'
    errorMsg.style.color = 'red'
    errorMsg.style.backgroundColor = 'yellow'
    console.log('error Email')
  }
  else {
    console.log('valid Email')
    const errorMsg = login.querySelector('.error')
    errorMsg.innerHTML = ''
  }
  if (!validatePassword(password)) {
    const errorMsg = login.querySelector('.error')
    errorMsg.innerHTML = 'Password should have a-z A-Z 0-9 spatials letter.'
    errorMsg.style.color = 'red'
    errorMsg.style.backgroundColor = 'yellow'
    console.log('error pass')
  }
  else {
    console.log('valid Pass')
    const errorMsg = login.querySelector('.error')
    errorMsg.innerHTML = ''
  }
}
