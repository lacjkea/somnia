import Plyr from 'plyr'

const GET_AUDIO_URL = 'https://javasquipt.com/wp-json/wp/v2/composition'

fetch(GET_AUDIO_URL)
  .then(data => data.json())
  .then(compositions => {
    compositions.forEach(renderComposition)
  })

const renderComposition = composition => {
  const template = document.querySelector('#composition').content
  const clone = template.cloneNode(true)

  clone.querySelector('.audio-title').textContent = composition.title.rendered
  clone.querySelector('.audio-subtitle').innerHTML = composition.excerpt.rendered
  clone.querySelector('audio').classList.add(composition.slug)

  const source = document.createElement('source')
  source.src = composition.audio_file.guid
  source.type = composition.audio_file.post_mime_type
  clone.querySelector('audio').appendChild(source)

  document.querySelector('.audio-list').appendChild(clone)

  // creating an audio player after appending
  new Plyr(`.${composition.slug}`)
}

new Plyr('#player')
