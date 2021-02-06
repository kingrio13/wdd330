import HikesController from "./HikesController.js";

 // Hike View handler
 export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';  
        //this.hikescontroller = new HikesController();
    }

renderHikeList(hikes, parent) {
  hikes.forEach(hike => {
    parent.appendChild(this.renderOneHike(hike));
  });

}

 
renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }



  renderOneHikeFull(hike, parentElement) {

    const divContainer = document.createElement("div");
    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("class","btnContainer")
    const item = document.createElement("li");
    const backbtn=document.createElement("button");
    backbtn.setAttribute("id","hikelist")
    backbtn.innerHTML="Back";
    item.innerHTML = ` 
        <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
    btnContainer.appendChild(backbtn)
    divContainer.appendChild(btnContainer);
    divContainer.appendChild(item);
    parentElement.appendChild(divContainer);
  }

  
}