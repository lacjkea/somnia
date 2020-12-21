const GET_NAVIGATION_URL = 'https://javasquipt.com/wp-json/wp/v2/pages'

fetch(GET_NAVIGATION_URL)
  .then(data => data.json())
  .then(navgiationItems => {
    navgiationItems.forEach(renderNavigation)
  })

const renderNavigation = navItem => {
  const template = document.querySelector('#navigation-item-template').content
  const clone = template.cloneNode(true)
  clone.querySelector('.navigation-link').textContent = navItem.title.rendered
  clone.querySelector('.navigation-link').href += navItem.slug
  document.querySelector('.navigation').prepend(clone)
}
