const navPage = require('./navPage');

const changePage = (element, data) => {
  if (element.dataset.navTo) history.pushState({}, element.dataset.navTo, element.href);
  newPage = navPage(data);
  document.querySelector('#nav-page').innerHTML = '';
  document.querySelector('#nav-page').append(newPage);
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}

const navigation = (parent, data) => {
  let clicked = false;
  let whereami = location.href;
  const reloadInterval = setInterval(() => {
    if (location.href !== whereami) {
      whereami = location.href;
      if (!clicked) changePage(parent, data);
      clicked = false;
    }
  }, 300);

  document.addEventListener('onbeforeunload', () => {
    clearInterval(reloadInterval);
  });

  Array.from(parent.getElementsByTagName('a')).forEach(element => {
    if (element.href) {
      element.dataset.navTo = element.getAttribute('href');
      element.addEventListener('click', e => {
        e.preventDefault();
        changePage(element, data);
        clicked = true;
      });
    }
  })

  return parent;
};

module.exports = navigation;
