import { getJSON } from "./utilities.js";



export default class sportsModel {
    constructor() {
        this.baseUrl ="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news";
        this.allteams="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/";
        this.nbaScore="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";


        this.sportsNews = [];
        this.scoreBoard=[];
        this.nbaTeam=[{}];
        this.type="news"
        this.comments = this.parseLS(this.type) || [];

        this.commentURL="";

       
        }

    parseLS(){
            return JSON.parse(localStorage.getItem(this.type));
    }




    filterLS(){
        let comp="url"
           const unique =  this.comments.map(e => e[comp])
                  .map((e, i, final) => final.indexOf(e) === i && i)
                 .filter((e) => this.comments[e]).map(e => this.comments[e]);

         
            return unique;

    }



    async getsportsNews() {
        this.sportsNews = await getJSON(this.baseUrl);
        return this.sportsNews;
    }



   async newsContent(newsInfo){
        let news=await getJSON(newsInfo);
        console.log(news);
        return news;
    }
    
    async getScoreboard(){
        this.scoreBoard=await getJSON(this.nbaScore);
        return this.scoreBoard;
    }

    async getNbaTeam(){
        for(let x=0;x<=30;x++){
            if(x>0){
            const nbaTeamList=await getJSON(this.allteams+x);
            this.nbaTeam.push(nbaTeamList);
            }
        }
        
        return this.nbaTeam;
    }

    addComment(url, email, name, content, title){
        console.log(email,name,content, title)
        
        const newcommentContent = {
            url:url,
            title:title,
            name: name,
            email: email,
            comment: content,
            date: new Date()
          };
    
          //convert local storage to parse then make some push
          this.comments.push(newcommentContent);
          localStorage.setItem(this.type,JSON.stringify(this.comments));
    }

    


    getCommentByURL(url){
        return this.commentURL=url;
    }

    listCommentByURL(){
        return this.comments.filter(comments => comments.url=== this.commentURL);
      }



       

}