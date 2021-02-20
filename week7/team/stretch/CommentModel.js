"use strict";

export default class CommentModel {
    constructor(type) {
      this.type=type;
      this.commentName="";
      this.comments = this.parseLS(this.type) || [];
    }

    getAllComment(){
        return this.comments;
    }
    getCommentType(){
      let i=[];
      for(let x=0; x<localStorage.length; x++){
        i.push(localStorage.key(x));
      }
      return i;
    }

    getCommentByName(name){
      this.commentName=name;
      return this.commentName;
    }


    listCommentByName(){
      return this.comments.filter(fName => fName.name === this.commentName);
    }


    parseLS(type){
      return JSON.parse(localStorage.getItem(type));
    }


    

    addComment(content){
      const newcommentContent = {
        name: this.commentName,
        comment: content,
        date: new Date()
      };

      //convert local storage to parse then make some push
      this.comments.push(newcommentContent);
      localStorage.setItem(this.type,JSON.stringify(this.comments));
    }



}