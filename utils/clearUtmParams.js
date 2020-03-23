export default () => {
  const { location, history } = window;
  const params = ['utm', 'fbclid'];
  let newUrl = location.toString();
  let replace = false;

  params.forEach(p => {
    const isInQuery = location.search.indexOf(p) !== -1;
    if (isInQuery) {
      // https://regex101.com/r/lROOeI/2
      const regex = new RegExp(`(&|/?)${p}(_\\w+)?=([_\\w0-9]+)`, 'g');
      newUrl = newUrl.replace(regex, '').replace(/\?&+/, '?').replace(/\?$/, '');
      replace = true;
    }
  });

  if (replace && history.replaceState) {
    history.replaceState({}, '', newUrl);
  }
};
