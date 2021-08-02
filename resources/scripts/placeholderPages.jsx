const createElement = require('./createElement');

const supportPage = ({podcast}) => <div>TEST SUPPORT</div>;
const bibliographyPage = ({podcast}) => <div>TEST BIBLIOGRAPHY</div>;
const aboutMePage = ({podcast}) => <div>TEST ABOUTME</div>;
const theHistoryOfRomePage = ({podcast}) => <div>TEST THoR</div>;
const audibleRecsPage = ({podcast}) => <div>TEST AUDIBLE RECS</div>;
const contactPage = ({podcast}) => <div>TEST CONTACT</div>;

module.exports = {
  supportPage,
  bibliographyPage,
  aboutMePage,
  theHistoryOfRomePage,
  audibleRecsPage,
  contactPage
};
