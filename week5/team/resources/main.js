import Hikes from './hikes.js'
const myHike = new Hikes('hikeListId');

window.addEventListener("load", () => {
    myHike.showHikeList();
  });
  

