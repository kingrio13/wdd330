export default class sportsView {
    constructor(){
        
    }

    liveNbanews(elements, newslist){

        
        elements.innerHTML="";
        const createUL=document.createElement("ul");

        //articles[2].links.api.news
        for(let x=0; x<newslist.articles.length; x++){
            const createLI=document.createElement("li");
            let url = newslist.articles[x].links.api.news.href.replace(/^http:\/\//i, 'https://');

            createLI.innerHTML=`<a href="#" data-url="${url}">${newslist.articles[x].headline}</a>`;

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

        let url = content.links.api.news.href.replace(/^http:\/\//i, 'https://');

        item.innerHTML=`<h3><a href="#" data-url="${url}">${content.headline}</a></h3>
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

            let item = document.createElement('div');
            item.setAttribute("class","commentForm");
            
            item.innerHTML=`<h2>Comment:</h2><label>Name:<input id="commentName" type="text" required="required"></label><label>
            Email:<input type="email" id="commentEmail" required="required"></label>
            <textarea placeholder="Enter your Comment Here" id="commentContent"></textarea>
            <input type="button" id="commentSubmit" value="Submit">
            `;


            element.append(item);

            let commentList=document.createElement('div');
            commentList.setAttribute('id','commentLists');
            element.appendChild(commentList);

            


           
          }).catch(function(reason) {
       
            content.then(function(result) {

                let url = result.videos[0].links.web.href.replace(/^http:\/\//i, 'https://');
                element.innerHTML=`<h2>SORRY!, We cannot play video Here!</h2> 
                <p>You can go to this link to watch the video</p>
                <p><a href="${url}" target="_blank">${url}</a></p>`;
            })
         });
    }


    showComment(url){

        if(url.length>0){
            let commentList = document.querySelector('#commentLists');
            let ulCommentList=document.createElement('ul');
            
            commentList.textContent="";
            let commenth2 = document.createElement('h3');
                commenth2.textContent="All Comments";
                commentList.appendChild(commenth2);
            
            url.forEach(comment => {
              let liList = document.createElement('li');
              const mydate=new Date(comment.date);
              liList.innerHTML = `<span class="commentContent">${comment.comment}<span>
              <span class="commentName">by: ${comment.name} - ${comment.email}</span> 
              <span class="commentDate">${mydate.getDate() + ' ' + mydate.toLocaleString('en-us', { month: "short" }) + ' ' + mydate.getFullYear()}</span>`;
              ulCommentList.appendChild(liList);
            });
            commentList.appendChild(ulCommentList)
            
            }
            

   }     


   showDiscussion(element,content){
    element.innerHTML="";
    let h3title=document.createElement('h3');
    h3title.setAttribute('id','h3discussions')
    h3title.textContent="Most Talked Articles";
    element.appendChild(h3title);
    content.forEach(newsContent=>{
        element.appendChild(this.listDiscussion(newsContent));
    });


   }

   listDiscussion(content){
    let url = content.url.replace(/^http:\/\//i, 'https://');
    const item = document.createElement("div");
    item.setAttribute("class","discussions");

    item.innerHTML=`<a href="#" data-url="${url}">${content.title}</a>`;

    return item;

   }



    scoreBoard(element, content){

        
        element.innerHTML="";

        content.events.forEach(newContent =>{
           
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