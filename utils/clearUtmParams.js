export default () => {
  const { location, history } = window;
  const isUtmsInQuery = location.search.indexOf('utm_') !== -1;
  if (isUtmsInQuery && history.replaceState) {
    history.replaceState({}, '', location.toString().replace(/(&|\?)utm([_a-z0-9=]+)/g, ''));
  }
};
