const podcastFeedParser = require("podcast-feed-parser");
const createElement = require('./createElement');
const episodeCards = require('./episodeCards');

const revolutionsFeedUrl = 'https://revolutionspodcast.libsyn.com/rss/'
let revolutionsPodcast = {}

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
      {episodeCards(podcast.episodes)}
    </div>
  </>
)

podcastFeedParser.getPodcastFromURL(revolutionsFeedUrl).then(podcast => {
  window.document.getElementById('app').replaceWith(app(podcast));
});
