const createElement = require('./createElement');

const episodeDescription = (description) => {
  const temp = document.createElement('div');
  temp.innerHTML = description;
  return temp.firstChild;
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
