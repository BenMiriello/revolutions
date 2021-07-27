const createElement = require('./createElement');

const episodeDescription = (desc) => {
  const descriptionElement = document.createElement('div');
  descriptionElement.innerHTML = desc;
  return descriptionElement;
};

const formattedDate = (dateString) =>
  new Date(dateString).toDateString().split(' ').slice(1, 4).join(' ');

const episodeCards = (episodes) =>
  <div className='episode-cards-container'>
    {episodes.map(episode =>
      <div className='episode-card'>
        <h3>{episode.title}</h3>
        <p>{formattedDate(episode.pubDate)}</p>
        {episodeDescription(episode.description)}
      </div>
    )}
  </div>;

module.exports = episodeCards;
