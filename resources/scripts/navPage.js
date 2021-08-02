const episodesPage = require('./episodesPage');
const {
  supportPage,
  bibliographyPage,
  aboutMePage,
  theHistoryOfRomePage,
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
  let currentPage;
  for (let page of pages) {
    if (window.location.pathname === page[0]) {
      currentPage = page[1];
    }
  }

  return currentPage(data);
};

module.exports = navPage;
