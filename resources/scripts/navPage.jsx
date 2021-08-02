const createElement = require('./createElement');
const episodeCards = require('./episodeCards');

const support = ({podcast}) => {
  return(<div>TEST SUPPORT</div>);
};

const bibliography = ({podcast}) => {
  return(<div>TEST BIBLIOGRAPHY</div>);
};

const aboutMe = ({podcast}) => {
  return(<div>TEST ABOUTME</div>);
};

const theHistoryOfRome = ({podcast}) => {
  // redirect w/ message about redirecting & link
  return(<div>TEST THoR</div>);
};

const audibleRecs = ({podcast}) => {
  return(<div>TEST AUDIBLE RECS</div>);
};

const contact = ({podcast}) => {
  return(<div>TEST CONTACT</div>);
};

const pages = [
  ['/', episodeCards],
  ['/support', support],
  ['/bibliography', bibliography],
  ['/aboutme', aboutMe],
  ['/thehistoryofrome', theHistoryOfRome],
  ['/audiblerecs', audibleRecs],
  ['/contact', contact],
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
