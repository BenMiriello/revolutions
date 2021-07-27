const createElement = require('./createElement');

const episodeDescription = (description) => {
  const temp = document.createElement('div');
  temp.innerHTML = description;
  return temp.firstChild;
};

const episodeCards = (episodes) => (
  <div>
    {episodes.map(episode =>
      <div>
        <h3>{episode.title}</h3>
        {episodeDescription(episode.description)}
      </div>
    )}
  </div>
);

module.exports = episodeCards;
