import './styles/style.scss'

console.log('Works')

const movementStrength = 25
const height = movementStrength / window.innerHeight
const width = movementStrength / window.innerWidth
document.querySelector('body').addEventListener('mousemove', e => {
  const pageX = e.pageX - window.innerWidth / 2
  const pageY = e.pageY - window.innerHeight / 2
  const newvalueX = width * pageX * -1 - 25
  const newvalueY = height * pageY * -1 - 50
  console.log(newvalueX, newvalueY)
  document.querySelector('.stars').style.backgroundPosition = newvalueX + 'px ' + newvalueY + 'px'
})
