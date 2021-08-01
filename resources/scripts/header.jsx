const createElement = require('./createElement');

const mainNavbar = meta => {
  title = meta && meta.title ? meta.title : 'Revolutions';
  return(
    <div id='navbar'>
      <h1>{title}</h1>
    </div>
  )
}

const landingNavbar = () => {
  return(
    <div className='nav'>
      <a>Support the Show</a>
      <a>Bibliograpy</a>
      <a>About Me</a>
      <a>The History of Rome</a>
      <a>Audible Recs</a>
      <a>Contact</a>
    </div>
  )
}

const header = meta => (
  <>
    {mainNavbar(meta)}
    <header></header>
    {landingNavbar()}
  </>
)

module.exports = header;
