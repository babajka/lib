const YM_PLAYLIST_URL_REGEX = /(?:http|https)?:\/\/(?:www\.)?music\.yandex\.(?:com|ru|by)\/users\/([\w@.\-+]+)\/playlists\/(\d+)/;

const parseUrl = url => {
  const match = YM_PLAYLIST_URL_REGEX.exec(url);
  if (!match) {
    return null;
  }
  const [_, playlistUsername, playlistId] = match;
  return { playlistUsername, playlistId } ;
};

export default parseUrl;
