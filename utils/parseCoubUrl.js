const COUB_URL_REGEX = /(?:http|https)?:\/\/(?:www\.)?coub\.com\/view\/([a-zA-Z\d]+)/;

const parseUrl = url => {
  const match = COUB_URL_REGEX.exec(url);
  if (!match) {
    return null;
  }
  const [_, coubId] = match;
  return coubId;
};

export default parseUrl;
