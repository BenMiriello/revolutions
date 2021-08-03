const createElement = require('./createElement');

const supportPage = ({podcast}) => <div>TEST SUPPORT</div>;
const aboutMePage = ({podcast}) => <div>TEST ABOUTME</div>;
const audibleRecsPage = ({podcast}) => <div>TEST AUDIBLE RECS</div>;
const contactPage = ({podcast}) => <div>TEST CONTACT</div>;

module.exports = {
  supportPage,
  aboutMePage,
  audibleRecsPage,
  contactPage
};
