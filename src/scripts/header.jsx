const createElement = require('./createElement');
const navigation = require('./navigation');

const mainNavbar = meta =>
  <div id='navbar'>
    <div id='menu-button-dummy'><div id='menu-button-inner-left'></div></div>
    <h1><a href='/'>{meta.title}</a></h1>
    <div id="menu-button">
      <div id='menu-button-inner'>
        <div className="menu-button-bar top"></div>
        <div className="menu-button-bar middle"></div>
        <div className="menu-button-bar bottom"></div>
      </div>
    </div>
  </div>;

const landingNavbar = () =>
  <div className='second-nav'>
    <a href='support'>Support the Show</a>
    <a href='bibliography'>Bibliograpy</a>
    <a href='aboutme'>About Me</a>
    <a href='thehistoryofrome'>The History of Rome</a>
    {/* <a href='audiblerecs'>Audible Recs</a> */}
    <a href='contact'>Contact</a>
  </div>;

const header = podcast => navigation(
  <>
    <header>
      {mainNavbar(podcast.meta)}
    </header>
    {landingNavbar()}
  </>, podcast
);

module.exports = header;
