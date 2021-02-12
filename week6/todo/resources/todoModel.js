import {todoList} from './ls.js';


export default class TodoModel {
    constructor(){

    }

    getAllList(){
       return localStorage;
    }
    
    addListStorage(newcontent){
        this.todoList={'id':Date.now(), 'content':newcontent, 'completed':false};
        localStorage.setItem(Date.now(),JSON.stringify(this.todoList));
    }

    getListDelete(deleteList){
        localStorage.removeItem(deleteList);
    }



    getListComplete(completeList){

        let jstat=JSON.parse(localStorage[completeList]);
       
        if(jstat.completed==false){
            jstat.completed=true;
        }
        else{
            jstat.completed=false;
        }
        
        localStorage.setItem(completeList,JSON.stringify(jstat))
       


    }

   

}