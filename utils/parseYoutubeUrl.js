const YOUTUBE_URL_REGEX = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]{11}).*/;

const parseUrl = url => {
  const match = YOUTUBE_URL_REGEX.exec(url);
  if (!match) {
    return null;
  }
  const [_, videoId] = match;
  return videoId;
};

export default parseUrl;
