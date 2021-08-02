const createElement = require('./createElement');
const podcastFeedParser = require('podcast-feed-parser');
const { isValidPodcastObject } = require('./helpers');
const { withNavigation, asNavigator } = require('./navigation');
const header = require('./header');
const navPage = require('./navPage');

const app = data => withNavigation(
  <>
    { asNavigator(header(data.podcast)) }
    <div className='page-body-container' id='nav-page' >
      { navPage(data) }
    </div>
  </>, data
);

const feedUrl = 'https://revolutionspodcast.libsyn.com/rss/';
podcastFeedParser.getPodcastFromURL(feedUrl).then(podcast => {
  if (isValidPodcastObject(podcast)) {
    window.episode = podcast.episodes[0];
    window.document.getElementById('app').replaceWith(app({podcast}));
  } else {
    window.location.href = "https://thehistoryofrome.typepad.com/revolutions_podcast/";
  }
});
