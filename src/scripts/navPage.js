const episodesPage = require('./episodesPage');
const theHistoryOfRomePage = require('./theHistoryOfRomePage')
const bibliographyPage = require('./bibliographyPage');
const {
  supportPage,
  aboutMePage,
  audibleRecsPage,
  contactPage
} = require('./placeholderPages');

const pages = [
  ['/', episodesPage],
  ['/support', supportPage],
  ['/bibliography', bibliographyPage],
  ['/aboutme', aboutMePage],
  ['/thehistoryofrome', theHistoryOfRomePage],
  ['/audiblerecs', audibleRecsPage],
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
