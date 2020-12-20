const features = document.querySelectorAll('.feature')
const lineSvg = document.querySelector('.line-image')
const positionFeatures = rotated => {
  const target = rotated ? '.line-image-rotated' : '.line-image'
  document.querySelectorAll(`${target} .circle-group`).forEach((g, i) => {
    const moveToLeft = rotated ? 80 : -features[i].offsetWidth / 2 + 50
    const marginTop = lineSvg.clientHeight / 3
    features[i].style.left = `${g.getBoundingClientRect().left + moveToLeft}px`
    // adding scrollY because getBoundingClientRect returns a position relative to the viewport
    features[i].style.top = `${g.getBoundingClientRect().top + marginTop + window.scrollY}px`
    features[i].style.visibility = 'visible'
  })
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

positionFeatures(Math.max(window.innerWidth, document.documentElement.clientWidth) < 700 || isMobile)
window.addEventListener(
  'scroll',
  () => {
    positionFeatures(Math.max(window.innerWidth, document.documentElement.clientWidth) < 700 || isMobile)
  },
  { passive: true }
)
window.addEventListener('resize', () => {
  positionFeatures(Math.max(window.innerWidth, document.documentElement.clientWidth) < 700 || isMobile)
})
