import HikesController from './HikesController.js'

const myHike = new HikesController('hikeListId');

window.addEventListener("load", () => {
    myHike.showHikeList();
  });