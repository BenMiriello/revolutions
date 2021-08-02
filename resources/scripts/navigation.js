const navPage = require('./navPage');

const withNavigation = (app, data) => {
  Array.from(app.getElementsByTagName('*')).forEach(node => {
    if (node.dataset.navTo) {
      node.addEventListener('click', e => {
        e.preventDefault();
        history.pushState({}, node.dataset.navTo, node.href);
        newPage = navPage(data);
        document.querySelector('#nav-page').innerHTML = '';
        document.querySelector('#nav-page').append(newPage);
      });
    }
  })

  return app;
}

const asNavigator = parent => {
  Array.from(parent.getElementsByTagName('*')).forEach(element => {
    if (element.href) {
      element.dataset.navTo = element.getAttribute('href');
    }
  })

  return parent;
};

module.exports = {
  withNavigation,
  asNavigator
};
