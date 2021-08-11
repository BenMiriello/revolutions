const createElement = require('./createElement');

const theHistoryOfRomePage = podcast => {
  const thorPath = 'https://thehistoryofrome.typepad.com/';
  const iTunesPath = 'https://itunes.apple.com/us/podcast/the-history-of-rome/id261654474'

  return(
    <div style='line-height: 200%;'>
      <h3>The History of Rome</h3>
      <p style='margin-top: 1rem;'>I used to write The History of Rome. But you probably alredy knew that...</p>
      <p>Website: <a href={thorPath}>{thorPath}</a></p>
      <p>iTunes: <a href={iTunesPath}>{iTunesPath}</a></p>
    </div>
  )
};

module.exports = theHistoryOfRomePage;
