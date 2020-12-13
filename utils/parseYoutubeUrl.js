const YOUTUBE_URL_REGEX = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;

const parseUrl = url => {
  const match = YOUTUBE_URL_REGEX.exec(url);
  if (!match) {
    return null;
  }
  const [_, videoId] = match;
  return videoId;
};

export default parseUrl;
