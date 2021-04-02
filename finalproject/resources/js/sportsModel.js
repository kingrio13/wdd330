import { getJSON } from "./utilities.js";



export default class sportsModel {
    constructor() {
        this.baseUrl ="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news";
        this.allteams="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/";
        this.nbaScore="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";


        this.sportsNews = [];
        this.scoreBoard=[];
        this.nbaTeam=[{}];

        }

    async getsportsNews() {
        this.sportsNews = await getJSON(this.baseUrl);
        return this.sportsNews;
    }



   async newsContent(newsInfo){
        let news=await getJSON(newsInfo);
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


       

}