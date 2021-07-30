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
  <>
  <div id='navbar'>
    <h1>{meta.title}</h1>
  </div>
  <header>
  </header>
  </>
)

module.exports = header;
