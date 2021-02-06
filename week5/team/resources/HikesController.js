import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  
  showHikeList() {
     const hikeListElement = document.getElementById("hikes");
     hikeListElement.innerHTML = "";
     this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), hikeListElement);

     this.addHikeListener()
  }

  showOneHike(hikeName) {
   const hikeListElement = document.getElementById("hikes");
   hikeListElement.innerHTML = "";
   
    this.hikesView.renderOneHikeFull(this.hikeModel.getHikeByName(hikeName), hikeListElement);

    const backbtn=document.getElementById("hikelist");
    if(backbtn){console.log(backbtn)}
    backbtn.addEventListener("click",event=>{
      this.showHikeList();
    })
    
  }



  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    let x=0;
    let eachli=document.querySelectorAll('#hikes li');
    eachli.forEach(liIndex => {liIndex.setAttribute("data-index-number",x); x++;
    liIndex.addEventListener("click", event=>{
      this.showOneHike(event.currentTarget.getAttribute("data-index-number"))    
    });

  });
   
  
    

  }
}
