const navPage = require('./navPage');

const navigation = (parent, data) => {
  Array.from(parent.getElementsByTagName('a')).forEach(element => {
    if (element.href) {
      element.dataset.navTo = element.getAttribute('href');
      element.addEventListener('click', e => {
        e.preventDefault();
        history.pushState({}, element.dataset.navTo, element.href);
        newPage = navPage(data);
        document.querySelector('#nav-page').innerHTML = '';
        document.querySelector('#nav-page').append(newPage);
      });
    }
  })

  return parent;
};

module.exports = navigation;
