const createElement = require('./createElement');

const episodeCard = episode => {
  const title = () => <h3>{episode.title && episode.title}</h3>;

  const description = () => {
    if (episode.description) {
      const descriptionElement = document.createElement('div');
      descriptionElement.innerHTML = episode.description;
      descriptionElement.className = 'episode-card-description';
      return descriptionElement;
    }
  };

  const formattedDate = () => {
    if (episode.pubDate) {
      const date = new Date(episode.pubDate).toDateString().split(' ').slice(1, 4).join(' ');
      return <p style='color: gray;'>{date}</p>;
    }
  };

  const directLink = () => {
    if (episode.enclosure && episode.enclosure.url) {
      return <a href={episode.enclosure.url}>Direct Link</a>
    }
  };

  const duration = () => {
    if (episode.duration) {
      const minutes = Math.floor(episode.duration/60);
      const seconds = episode.duration % 60;
      return `${minutes}:${seconds}${seconds < 10 ? '0' : ''}`;
    }
  };

  const directLinkAndDuration = () =>
    <div className='ep-card-link-duration-container'>
      {directLink()}
      <span style="width:0.5rem; display:inline-block;"></span>
      <span style='color: gray;'>{duration()}</span>
    </div>;

  return(
    <div className='episode-card'>
      {title()}
      {formattedDate()}
      {description()}
      {directLinkAndDuration()}
    </div>
  )
};

const episodeCards = episodes =>
  <div className='episode-cards-container'>
    {episodes.map(episode => episodeCard(episode))}
  </div>;

module.exports = episodeCards;
