const GET_USER_FEEDBACK_URL = 'https://javasquipt.com/wp-json/wp/v2/user_feedback?_embed'

fetch(GET_USER_FEEDBACK_URL)
  .then(data => data.json())
  .then(comments => {
    console.log(comments)
    comments.forEach(renderFeedback)
  })

const renderFeedback = comment => {
  const template = document.querySelector('#feedback-template').content
  const clone = template.cloneNode(true)
  clone.querySelector('.comment').innerHTML = comment.excerpt.rendered
  clone.querySelector('.name').textContent = comment.title.rendered
  clone.querySelector('.platform').textContent = comment.platform
  clone.querySelector('.picture').src =
    comment._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail?.source_url ||
    comment._embedded['wp:featuredmedia'][0].source_url
  document.querySelector('.feedback-container').appendChild(clone)
}
