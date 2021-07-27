const createElement = require('./createElement');

const episodeDescription = (description) => {
  const temp = document.createElement('div');
  temp.innerHTML = description;
  return temp.firstChild;
};

const episodeCards = (episodes) => (
  episodes.map(episode =>
    <div>
      <h3>{episode.title}</h3>
      {episodeDescription(episode.description)}
    </div>
  )
);

module.exports = episodeCards;
