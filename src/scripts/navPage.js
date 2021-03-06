const episodesPage = require('./episodesPage');
const bibliographyPage = require('./bibliographyPage');
const aboutMePage = require('./aboutMePage');
const theHistoryOfRomePage = require('./theHistoryOfRomePage');
const supportPage = require('./supportPage');
const contactPage = require('./contactPage');

const pages = [
  ['/', episodesPage],
  ['/support', supportPage],
  ['/bibliography', bibliographyPage],
  ['/aboutme', aboutMePage],
  ['/thehistoryofrome', theHistoryOfRomePage],
  // ['/audiblerecs', audibleRecsPage],
  ['/contact', contactPage],
];

const navPage = data => {
  let currentPage = episodesPage;
  for (let page of pages) {
    if (window.location.pathname === page[0]) {
      currentPage = page[1];
    }
  }
  return currentPage(data);
};

module.exports = navPage;
