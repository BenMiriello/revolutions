const podcastFeedParser = require("podcast-feed-parser");

async function printPodcastTitle (url) {
	const podcast = await podcastFeedParser.getPodcastFromURL(url)
	console.log(podcast)
}

printPodcastTitle('https://revolutionspodcast.libsyn.com/rss/')

function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child)
    else elem.append(child)
  }
  return elem
}

const app = (
  <>
    <header>
      <div id='header-cover-container'>
        <h1>REVOLUTIONS</h1>
        <div id='sub-header-container'>
          <h3>a&nbsp;weekly&nbsp;podcast&nbsp;exploring great&nbsp;political&nbsp;revolutions</h3>
        </div>
      </div>
    </header>
    <div>
      
    </div>
  </>
)

window.document.getElementById('app').replaceWith(app);

