// please import

//  import { setStorage, getStorage, delFromStorage, clearStorage } from "HERE";

// entry params:

// section - 'watched' or 'queue' section to render 
//  needs WATCHED & QUEUE CONST!!!

// filmInfo - object with film information needs to save for ex.:
// {
//   "id": 594767,
//   "original_title": "Shazam! Fury of the Gods",  
//       OR "title": 'Shazam! Fury of the Gods', 
//       MAYBE ????
//   "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
//   "genre_ids": [28, 35, 14],
//   "release_date": "2023-03-15",
// }

import { refs } from "../refs";

export const getStorage = section => {
  const dataArr = [];
  const data = JSON.parse(localStorage.getItem(section));
  if (!data) {
    //some Notify.info(`You have NO films in ${section}`)
    return dataArr;
  }
  dataArr.push(...data);
  return dataArr;
};

export const setStorage = (section, filmInfo) => {
  dataArr = getStorage(section);
  if (dataArr.find(film => film.id === filmInfo.id)) {
    // some Notify.info(`You have this film in ${section} already`)
    return;
  }
  dataArr.push(filmInfo);
  localStorage.setItem(section, JSON.stringify(dataArr));

  // del from other section code here
  // delFromStorage('OTHER_SECTION', filmInfo.id);
  // needs WATCHED & QUEUE CONST!!!
  // replace "OTHER_SECTION" with section === WATCHED ? QUEUE : WATCHED
};

export const delFromStorage = (section, id) => {
  dataArr = getStorage(section);
  if (!dataArr.find(film => film.id === id)) {
    return;
  }
  const filtered = dataArr.filter(film => film.id !== id);
  localStorage.setItem(section, JSON.stringify(filtered));
};

export const clearStorage = section => {
  localStorage.removeItem(section);
};