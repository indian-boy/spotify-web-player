/* eslint-disable no-undef */
import spotify from './spotify';
import renderAlbums from './albumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

function makeRequest() {
  spotify.search.albums(searchInput.value)
    .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest();
  });
}
