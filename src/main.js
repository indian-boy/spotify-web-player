/* eslint-disable no-undef */
import spotify from './Spotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumsTracks';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');
const album = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmR');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo));

album
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
