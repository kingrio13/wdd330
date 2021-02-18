

 // Hike View handler
 export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';  
      
    }

renderHikeList(hikes, parent) {
  hikes.forEach(hike => {
    parent.appendChild(this.renderOneHike(hike));
  });

}

 
renderOneHike(hike) {
    const item = document.createElement("li");
    item.setAttribute('data-name',hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.description}</p>
                  </div>
          </div>`;
  
    return item;
  }



  renderOneHikeFull(hike, parentElement) {

    const divContainer = document.createElement("div");
    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("class","btnContainer")
    const item = document.createElement("li");
    item.setAttribute('data-name',hike.name);
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
                  <div>
                  <h3>Description</h3>
                  <p>${hike.description}</p>
                  </div>

                  <div>
                  <h3>directions</h3>
                  <p>${hike.directions}</p>
                  </div>
          </div>
          
          `;
    const divCommentboxContainer = document.createElement('div');
    divCommentboxContainer.setAttribute('class', 'divCommentboxContainer')
    divCommentboxContainer.innerHTML=`
          <div class="commentContainer">
          <textarea id="newComment" rows="4" cols="50" placeholder="Comment Here.."></textarea>
          <input type="button" id="addComment" Value="submit">
          </div>
          <div id="commentLists"></div>
          
          `;
          
    btnContainer.appendChild(backbtn)
    divContainer.appendChild(btnContainer);
    divContainer.appendChild(item);
    divContainer.appendChild(divCommentboxContainer);
    parentElement.appendChild(divContainer);
  }

  
}