const createElement = require('./createElement');

const nav = () => {
  return (
    <div className='nav'>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
      <div>Fourth</div>
      <div>Fifth</div>
    </div>
  )
};

const header = meta => (
  <header>
    <div id='sub-header-container'></div>
    <div id='header-title-container'>
      <h1>{meta.title}</h1>
    </div>
    {nav()}
  </header>
)

module.exports = header;
