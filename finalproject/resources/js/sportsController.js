import sportsModel from './sportsModel.js';
import sportsView from './sportsView.js';


export default class sportsController {

    constructor() {
        this.sportsModel = new sportsModel();
        this.sportsView = new sportsView();
        this.nbaNewsElement=document.querySelector("#sportsNews");
        this.nbaTeamElement=document.querySelector("#nbaTeam");

        this.nbaContentElement=document.querySelector("#mainContent");

        }

    async init() {
    this.sportsNews();
    this.sportsScoreboard();
    this.sportsTeam();
    }

    async sportsNews(){
        const sportsNewsList = await this.sportsModel.getsportsNews();
        this.nbaNewsElement.innerHTML="<p>Fetching News...</p>";
        this.sportsView.liveNbanews(this.nbaNewsElement, sportsNewsList);
        this.sportsView.enhanceNews();

         
        this.sportsView.listNews(sportsNewsList);

        const newslink=document.querySelectorAll('#sportsNews ul li a');
        newslink.forEach(newslinkurl => {
            newslinkurl.addEventListener("click", event=>{
        
                   
               
                event.preventDefault();
                const newEvent=event.currentTarget.getAttribute("data-url");
                const sportsNewsContent = this.sportsModel.newsContent(newEvent);

                this.nbaContentElement.innerHTML="<p>Fetching News...</p>"
                this.sportsView.renderNewsContent(sportsNewsContent,this.nbaContentElement);

               

              
                    this.commentListener();
                   
                 
              
                
            });
            
        });

        
        const newslink2=document.querySelectorAll('.newslists h3 a');
        newslink2.forEach(newslinkurl2 => {
            newslinkurl2.addEventListener("click", event=>{
                const newEvent2=event.currentTarget.getAttribute("data-url");
                const sportsNewsContent2 = this.sportsModel.newsContent(newEvent2);

                this.nbaContentElement.innerHTML="<p>Fetching News...</p>"
                this.sportsView.renderNewsContent(sportsNewsContent2,this.nbaContentElement);

                
                //let mike = await this.commentListener();
                this.commentListener();


            });
            
        });


       

    }


    



    async commentListener(){

        //needed to delay before conntinuein with the comment
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        try {
            
            let commentBTN=document.querySelector('#commentSubmit');
            //console.log(commentBTN);

               commentBTN.addEventListener("click", comments=>{
                comments.preventDefault();
                
                const commentName = document.querySelector('#commentName');
                const commentEmail = document.querySelector('#commentEmail');
                const commentContent = document.querySelector('#commentContent');
                //console.log(commentEmail.value, commentName.value, commentContent.value);

                if(!commentEmail.value && !commentName.value && !commentContent.value){
                    alert('Please Fill out All Fields');
                }
                else{
                   
                   this.sportsModel.addComment(commentName.value, commentEmail.value, commentContent.value);
              
                   
                }
            });

            
        } catch (error) {
            
        }

       
            
}

  

    async sportsScoreboard(){
        const nbaScoreboard = await this.sportsModel.getScoreboard();
        const element=document.querySelector('#scoreboard');

        this.sportsView.scoreBoard(element,nbaScoreboard);
        
    }

    async sportsTeam(){
        const nbaTeamList = await this.sportsModel.getNbaTeam();
        this.nbaTeamElement.innerHTML="Getting Team Info...";
        this.sportsView.nbaTeam(this.nbaTeamElement, nbaTeamList);

       
    }





}