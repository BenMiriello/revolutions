const createElement = require('./createElement');

const supportPage = ({podcast}) => {
  return(<div>TEST SUPPORT</div>);
};

const bibliographyPage = ({podcast}) => {
  return(<div>TEST BIBLIOGRAPHY</div>);
};

const aboutMePage = ({podcast}) => {
  return(<div>TEST ABOUTME</div>);
};

const theHistoryOfRomePage = ({podcast}) => {
  // redirect w/ message about redirecting & link
  return(<div>TEST THoR</div>);
};

const audibleRecsPage = ({podcast}) => {
  return(<div>TEST AUDIBLE RECS</div>);
};

const contactPage = ({podcast}) => {
  return(<div>TEST CONTACT</div>);
};

module.exports = {
  supportPage,
  bibliographyPage,
  aboutMePage,
  theHistoryOfRomePage,
  audibleRecsPage,
  contactPage
};
