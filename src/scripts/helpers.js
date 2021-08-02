const isValidPodcastObject = podcast => {
  return podcast && podcast.meta && podcast.meta.title &&
  podcast.episodes && podcast.episodes[0] && podcast.episodes[0].title
};

module.exports = {
  isValidPodcastObject,
};
