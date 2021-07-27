const createElement = require('./createElement');

const episodeDescription = (desc) => {
  const descriptionElement = document.createElement('div');
  descriptionElement.innerHTML = desc;
  return descriptionElement;
};

const episodeCards = (episodes) => (
  <div className='episode-cards-container'>
    {episodes.map(episode =>
      <div className='episode-card'>
        <h3>{episode.title}</h3>
        {episodeDescription(episode.description)}
      </div>
    )}
  </div>
);

module.exports = episodeCards;
