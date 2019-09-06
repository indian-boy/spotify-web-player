/* eslint-disable no-undef */
import spotify from './Spotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';

const albums = spotify.search.albums('Incubus');

const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo));
