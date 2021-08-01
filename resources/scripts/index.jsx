const createElement = require('./createElement');
const podcastFeedParser = require("podcast-feed-parser");
const header = require('./header');
const episodeCards = require('./episodeCards');

const support = () => {
  return(
    <div>TEST SUPPORT</div>
  )
}

const navigator = podcast => {
  switch(window.location.pathname){
    case '/support':
      return support();
    default:
      return episodeCards(podcast.episodes);
  }
}

const app = podcast => (
  <div>
    { header(podcast.meta) }
    <div className='page-body-container'>
      { navigator(podcast) }
    </div>
  </div>
)

const feedUrl = 'https://revolutionspodcast.libsyn.com/rss/';
podcastFeedParser.getPodcastFromURL(feedUrl).then(podcast => {
  console.log(podcast.episodes[0]);
  window.episode = podcast.episodes[0];
  window.document.getElementById('app').replaceWith(app(podcast));
});
