import { API_KEY, BASE_URL } from '../api_key';
import { renderFilmInfo } from './renderFilmInfo';
export default async function getFilmInfo(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(r => {
    return r.json();
  });
}
getFilmInfo(594779).then(data => {
  renderFilmInfo(data);
});
