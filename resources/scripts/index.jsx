const createElement = require('./createElement');
const podcastFeedParser = require("podcast-feed-parser");
const header = require('./header');
const episodeCards = require('./episodeCards');

const app = (podcast) => (
  <>
    { header(podcast.meta) }
    { episodeCards(podcast.episodes) }
  </>
)

const feedUrl = 'https://revolutionspodcast.libsyn.com/rss/';
podcastFeedParser.getPodcastFromURL(feedUrl).then(podcast => {
  window.document.getElementById('app').replaceWith(app(podcast));
});
