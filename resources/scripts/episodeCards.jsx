const createElement = require('./createElement');

const episodeCard = episode => {
  const title = () => <h3>{episode.title && episode.title}</h3>;

  const description = () => {
    if (episode.description) {
      const descriptionElement = document.createElement('div');
      descriptionElement.innerHTML = episode.description;
      return descriptionElement;
    }
  };

  const formattedDate = () => {
    if (episode.pubDate) {
      return <p>new Date(dateString).toDateString().split(' ').slice(1, 4).join(' ')</p>;
    }
  };

  const directLink = () => {
    if (episode.enclosure && episode.enclosure.url) {
      return <a href={episode.enclosure.url}>Direct Link</a>
    }
  };

  return(
    <div className='episode-card'>
      {title()}
      {formattedDate()}
      {description()}
      {directLink()}
    </div>
  )
};

const episodeCards = episodes =>
  <div className='episode-cards-container'>
    {episodes.map(episode => episodeCard(episode))}
  </div>;

module.exports = episodeCards;
