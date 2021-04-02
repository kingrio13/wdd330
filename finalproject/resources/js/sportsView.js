export default class sportsView {
    constructor(){
        
    }

    liveNbanews(elements, newslist){

        
        elements.innerHTML="";
        const createUL=document.createElement("ul");

        //articles[2].links.api.news
        for(let x=0; x<newslist.articles.length; x++){
            const createLI=document.createElement("li");
            createLI.innerHTML=`<a href="#" data-url="${newslist.articles[x].links.api.news.href}">${newslist.articles[x].headline}</a>`;

            if(x==0){
                createLI.setAttribute("class","active");
            }
            createUL.appendChild(createLI);
            elements.appendChild(createUL);
        }
    }





    listNews(newslist){
        const element=document.querySelector("#newslist");
     
        newslist.articles.forEach(newslists => {
            element.appendChild(this.renderListNews(newslists));
          });

    }

    renderListNews(content){

        const item = document.createElement("div");
        item.setAttribute("class","newslists container");

        item.innerHTML=`<h3><a href="#" data-url="${content.links.api.news.href}">${content.headline}</a></h3>
        <div class="newsIMG"><img src="${content.images[0].url}"></div>
        <div class=NewsContent><p>${content.description}<p></div>
        `;

        return item;
    }






    enhanceNews(){
        const newElement=document.querySelectorAll('#sportsNews ul li')

        let count=0;
       setInterval(function() { 
            newElement.forEach(element => {
                element.removeAttribute("class");
            });
            if (count < newElement.length) { 
            newElement[count].classList.value="active";
            
            count++;
            if(count==newElement.length){
                count=0;
            }
            
            }}, 5000); 
            
    }

    nbaTeam(element, nbalist){
        
        element.innerHTML="<h2 class='nbaTeamHeadline'>NBA TEAM</h1>";
        //console.log("source only",nbalist[1]);
        for(let x=0;x<nbalist.length;x++){
                if(x>0){
                    element.appendChild(this.renderNbaTeam(nbalist[x].team));
                }
                
        }
       
    }

    renderNbaTeam(nbalists){
        const creatDiv=document.createElement("div");
        creatDiv.setAttribute("class", "col-3 nbaTeam");
        creatDiv.innerHTML=`
                            <img src="${nbalists.logos[0].href}">
                            <span>${nbalists.displayName}</span>
                            <span>${nbalists.record.items[0].summary}
        
        `;

        return creatDiv;
     
    }

    renderNewsContent(content,element){
        content.then(function(result) {

           let commentbox=document.createElement('textarea');


           let commentName=document.createElement('input');
           commentName.setAttribute("type","name");
           let commentNameLabel=document.createElement('label');
           commentNameLabel.innerHTML="Name:"

           let commentEmail=document.createElement('input'); 
           commentEmail.setAttribute("type","email");
           let commentEmailLabel=document.createElement('label');
           commentEmailLabel.innerHTML="Email:"

           let commentSubmit=document.createElement('input'); 
            commentSubmit.innerHTML="Submit";

           let commentDiv=document.createElement('div');
           commentDiv.setAttribute('class','commentForm');

           let newStory=result.headlines[0].story;
            newStory=newStory.replace(/(?:\r\n|\r|\n)/g, '<br>');

            element.innerHTML=`
            <h1>
            ${result.headlines[0].description}
            </h1>
            
            <p>
            ${newStory}
            </p>
            `;

            commentDiv.innerHTML="<h2>Comment:</h2>"

            
            commentNameLabel.appendChild(commentName);
            commentDiv.appendChild(commentNameLabel);
            
            commentEmailLabel.appendChild(commentEmail);
            commentDiv.appendChild(commentEmailLabel);

            commentDiv.appendChild(commentbox);
            commentDiv.appendChild(commentSubmit);

            
            element.appendChild(commentDiv);


           
          }).catch(function(reason) {
       
            content.then(function(result) {
                element.innerHTML=`<h2>SORRY!, We cannot play video Here!</h2> 
                <p>You can go to this link to watch the video</p>
                <p><a href="${result.videos[0].links.web.href}" target="_blank">${result.videos[0].links.web.href}</a></p>`;
            })
         });
    }



    scoreBoard(element, content){

        element.innerHTML="";

        
        console.log(element);
        console.log(content);

        content.events.forEach(newContent =>{
            console.log(element);
            console.log(newContent);
            element.appendChild(this.renderScoreBoard(newContent));

        });
    }

    renderScoreBoard(content){

        
        const item = document.createElement("div");
        item.setAttribute('class','nbaScoreBoard');

        let nbatime="";
        //&& content.status.displayClock==0.0
        if(content.status.period<4 || content.status.clock!=0){
            nbatime=`LIVE Q${content.status.period} ${content.status.displayClock}`;
        }
        else{
            nbatime=`<b>FINAL</b>`;    
        }

        item.innerHTML=`
                <div class="nbaVersusImg"><img src="${content.competitions[0].competitors[0].team.logo}"></div>
                <span>${content.competitions[0].competitors[0].team.abbreviation}
                        <span class="nbaSummary">${content.competitions[0].competitors[0].records[0].summary}</span>
                </span>
                <span>${content.competitions[0].competitors[0].score}</span>
                
                <span class="nbaversus">vs</span>
                <div class="nbaVersusImg"><img src="${content.competitions[0].competitors[1].team.logo}"></div>
                <span>${content.competitions[0].competitors[1].team.abbreviation}
                <span class="nbaSummary">${content.competitions[0].competitors[1].records[0].summary}</span>
                </span>
                <span>${content.competitions[0].competitors[1].score}</span>

                <div class="nbaTime">${nbatime}</div>
            `;
        return item;

    }



}