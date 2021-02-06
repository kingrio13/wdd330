import Hikes from './hikes.js'
const myHike = new Hikes('hikeListId');
console.log(myHike);
window.addEventListener("load", () => {
    myHike.showHikeList();
  });
  

