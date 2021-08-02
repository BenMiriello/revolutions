const createElement = require('./createElement');

const theHistoryOfRomePage = podcast => {
  const thorPath = 'https://thehistoryofrome.typepad.com/';
  location.replace(thorPath);
  return(<div>Redirecting to <a href={thorPath}>The History of Rome</a></div>)
};

module.exports = theHistoryOfRomePage;
