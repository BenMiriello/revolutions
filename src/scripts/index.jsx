const createElement = require('./createElement');
const podcastFeedParser = require('podcast-feed-parser');
const { isValidPodcastObject } = require('./helpers');
const { withNavigation } = require('./navigation');
const header = require('./header');
const navPage = require('./navPage');

const app = podcast => withNavigation(
  <>
    { header(podcast) }
    <div className='page-body-container' id='nav-page' >
      { navPage(podcast) }
    </div>
  </>, podcast
);

const feedUrl = 'https://revolutionspodcast.libsyn.com/rss/';
podcastFeedParser.getPodcastFromURL(feedUrl).then(podcast => {
  if (isValidPodcastObject(podcast)) {
    document.getElementById('app').replaceWith(app(podcast));
  } else {
    location.href = "https://thehistoryofrome.typepad.com/revolutions_podcast/";
  }
});
