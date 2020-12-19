import './styles/style.scss'
import Plyr from 'plyr'

console.log('Works')

const movementStrength = 25
const height = movementStrength / window.innerHeight
const width = movementStrength / window.innerWidth
document.querySelector('body').addEventListener('mousemove', e => {
  const pageX = e.pageX - window.innerWidth / 2
  const pageY = e.pageY - window.innerHeight / 2
  const newvalueX = width * pageX * -1 - 25
  const newvalueY = height * pageY * -1 - 50
  document.querySelector('.stars').style.backgroundPosition = newvalueX + 'px ' + newvalueY + 'px'
})

document.querySelectorAll('audio').forEach(el => {
  console.log(el.classList)
  new Plyr('.' + el.classList[0], {})
})

// calculate the correct offset of an element relative to the window
const getOffset = element => {
  const bound = element.getBoundingClientRect()
  const doc = document.documentElement

  return {
    top: bound.top + window.pageYOffset - doc.clientTop,
    left: bound.left + window.pageXOffset - doc.clientLeft
  }
}

const features = document.querySelectorAll('.feature')
document.querySelectorAll('.circle-group').forEach((g, i) => {
  const moveToLeft = features[i].offsetWidth / 2
  features[i].style.left = `${getOffset(g).left - (moveToLeft - 50)}px`
  features[i].style.top = `${getOffset(g).top + 80}px`
})
