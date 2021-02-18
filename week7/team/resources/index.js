import HikesController from './MainController.js'

const myHike = new HikesController('hikeListId');

window.addEventListener("load", () => {
    myHike.showHikeList();
  });