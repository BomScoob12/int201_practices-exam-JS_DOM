// Good luck on JING write your code here

const randomColor = document.querySelector('#rainbow')
const randomColorBtn = randomColor.getElementsByTagName('button')[0]

const sallyBackpack = document.getElementById('backpack')
const addingBtn = sallyBackpack.getElementsByTagName('button')[0]

// TODO adding event
randomColorBtn.addEventListener('click', randomRainbow)
addingBtn.addEventListener('click', addingBackpack)

function randomRainbow(e) {
  const rainbowColor = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6']
  const randomColor =
    rainbowColor[Math.floor(Math.random() * rainbowColor.length)]
  const parent = e.target.parentElement
  parent.style.backgroundColor = randomColor
}

function addingBackpack(e) {
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
    errorMsg.innerHTML = ""
    errorMsg.style = ""
    console.log('error msg timeout!')
  }, 3000)
}
