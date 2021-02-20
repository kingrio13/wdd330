"use strict";

import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

import CommentModel from './CommentModel.js';
import CommentView from './CommentView.js';

// Hike controller
export default class HikesController {
  constructor() {
  
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView();

    this.type='hikes';
    //this.type='garden';
    
    this.commentModel = new CommentModel(this.type);
    this.commentView = new CommentView();
  

  }
  
  showHikeList() {
     const hikeListElement = document.getElementById("hikes");
     hikeListElement.innerHTML = "";
     this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), hikeListElement);

     const comments=document.getElementById("comments");
     comments.innerHTML="";
     this.commentView.renderAllComment(this.commentModel.getAllComment(), comments);
     this.commentView.renderCommentType(this.commentModel.getCommentType());
     //this.commentModel.getCommentType();

     this.addHikeListener()
  }


  



  showOneHike(hikeName) {
   const hikeListElement = document.getElementById("hikes");
   hikeListElement.innerHTML = "";
   
    this.hikesView.renderOneHikeFull(this.hikeModel.getHikeByName(hikeName), hikeListElement);
    const backbtn=document.getElementById("hikelist");
 
    backbtn.addEventListener("click",event=>{
      this.showHikeList();
    })

    const comments=document.getElementById("comments");
    comments.innerHTML="";
    this.addCommentListener();
    //this.commentView.showComment(this.commentModel.getCommentByName(), comments);
    
  }

  addCommentListener(){
    const addCommentBtn=document.getElementById('addComment');
    

    addCommentBtn.addEventListener("click", addComment=>{
      const addCommentContent=document.getElementById('newComment').value;
      if(addCommentContent){
        this.commentModel.addComment(addCommentContent);
        document.getElementById('newComment').value="";
        
        this.commentView.showSingleComment(this.commentModel.listCommentByName());
      }
      else{
        alert('needed Content Here');
      }
    })

  }



  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    let x=0;
    let eachli=document.querySelectorAll('#hikes li');
    eachli.forEach(liIndex => {
    liIndex.setAttribute("data-index-number",x); x++;

    liIndex.addEventListener("click", event=>{
      this.showOneHike(event.currentTarget.getAttribute("data-index-number"));
      //need to go to model first for possible input
      let commentName=event.currentTarget.getAttribute("data-name");
      this.commentModel.getCommentByName(commentName);
      this.commentView.showSingleComment(this.commentModel.listCommentByName());   
      
     
    });

  });
   
  
    

  }
}
