const createElement = require('./createElement');
const podcastFeedParser = require('podcast-feed-parser');
const { isValidPodcastObject } = require('./helpers');
const header = require('./header');
const navPage = require('./navPage');

const setNavbarOnClick = () => {
  document.querySelector('#menu-button').addEventListener('click', e => {
    const menuButton = document.querySelector('#menu-button-inner');
    if (menuButton.classList.contains('menu-button-clicked')) {
      menuButton.classList.remove('menu-button-clicked')
    } else menuButton.classList.add('menu-button-clicked');
  })
}

const app = podcast =>
  <div>
    { header(podcast) }
    <div className='page-body-container' id='nav-page' >
      { navPage(podcast) }
    </div>
  </div>

const feedUrl = 'https://revolutionspodcast.libsyn.com/rss/';
podcastFeedParser.getPodcastFromURL(feedUrl).then(podcast => {
  if (isValidPodcastObject(podcast)) {
    document.getElementById('app').replaceWith(app(podcast));
  } else {
    location.href = "https://thehistoryofrome.typepad.com/revolutions_podcast/";
  }
  {setNavbarOnClick()}
});
