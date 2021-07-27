const createElement = require('./createElement');

const header = (meta) => (
  <header>
    <div id='header-cover-container'>
      <h1>{meta.title}</h1>
      <div id='sub-header-container'>
        <h3>a&nbsp;weekly&nbsp;podcast&nbsp;exploring great&nbsp;political&nbsp;revolutions</h3>
      </div>
    </div>
  </header>
)

module.exports = header;