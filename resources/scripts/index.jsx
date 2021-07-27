const podcastFeedParser = require("podcast-feed-parser");

const revolutionsFeedUrl = 'https://revolutionspodcast.libsyn.com/rss/'
let revolutionsPodcast = {}

function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child)
    else elem.append(child)
  }
  return elem
}

const app = (podcast) => (
  <>
    <header>
      <div id='header-cover-container'>
        <h1>{podcast.meta.title}</h1>
        <div id='sub-header-container'>
          <h3>a&nbsp;weekly&nbsp;podcast&nbsp;exploring great&nbsp;political&nbsp;revolutions</h3>
        </div>
      </div>
    </header>
    <div>
      {podcast.episodes.map(episode => (
        <div>{episode.title}</div>
      ))}
    </div>
  </>
)

podcastFeedParser.getPodcastFromURL(revolutionsFeedUrl).then(podcast => {
  window.document.getElementById('app').replaceWith(app(podcast));
});
