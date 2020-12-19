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

const positionFeatures = () => {
  document.querySelectorAll('.circle-group').forEach((g, i) => {
    console.log(g.getBoundingClientRect())
    const moveToLeft = features[i].offsetWidth / 2 - 50
    const marginTop = 80
    features[i].style.left = `${g.getBoundingClientRect().left - moveToLeft}px`
    features[i].style.top = `${g.getBoundingClientRect().top + marginTop + window.scrollY}px`
    features[i].style.display = 'visible'
  })
}

const features = document.querySelectorAll('.feature')
window.addEventListener('scroll', positionFeatures)
window.addEventListener('resize', positionFeatures)
