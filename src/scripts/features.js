const features = document.querySelectorAll('.feature')
const lineSvg = document.querySelector('.line-image')

const positionFeatures = rotated => {
  const target = rotated ? '.line-image-rotated' : '.line-image'
  document.querySelectorAll(`${target} .circle-group`).forEach((circle, i) => {
    const moveToLeft = rotated ? 80 : -features[i].offsetWidth / 2 + 50
    const marginTop = lineSvg.clientHeight / 3

    features[i].style.left = `${circle.getBoundingClientRect().left + moveToLeft}px`
    // adding scrollY because getBoundingClientRect returns a position relative to the viewport
    features[i].style.top = `${circle.getBoundingClientRect().top + marginTop + window.scrollY}px`

    features[i].style.visibility = 'visible'
  })
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const windowWidth = Math.max(window.innerWidth, document.documentElement.clientWidth)
const shouldRotateSVG = windowWidth < 700 || isMobile

positionFeatures(shouldRotateSVG)
window.addEventListener(
  'scroll',
  () => {
    positionFeatures(shouldRotateSVG)
  },
  { passive: true }
)
window.addEventListener('resize', () => {
  positionFeatures(shouldRotateSVG)
})
