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
    const newList = document.createElement('li')
    const ulElement = sallyBackpack.querySelector('div#listItem ul')
    newList.innerText = sallyBackpack.getElementsByTagName('input')[0].value
    ulElement.appendChild(newList)
}
