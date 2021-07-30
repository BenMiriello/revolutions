const createElement = require('./createElement');
const podcastFeedParser = require("podcast-feed-parser");
const header = require('./header2');
const episodeCards = require('./episodeCards');

const app = podcast => (
  <div>
    { header(podcast.meta) }
    <div className='page-body-container'>
      { episodeCards(podcast.episodes) }
    </div>
  </div>
)

const feedUrl = 'https://revolutionspodcast.libsyn.com/rss/';
podcastFeedParser.getPodcastFromURL(feedUrl).then(podcast => {
  console.log(podcast.episodes[0]);
  window.episode = podcast.episodes[0];
  window.document.getElementById('app').replaceWith(app(podcast));
});
