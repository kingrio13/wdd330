"use strict";
export default class CommentView {
    constructor() {

    }

renderAllComment(comments, parent) {


    if(comments.length>0){
   
    let commentList = document.querySelector('#comments');
    let commenth2 = document.createElement('h2');
    commenth2.textContent="Comments";
    commentList.appendChild(commenth2);
    let ulCommentList=document.createElement('ul');

      comments.forEach(comment => {
        let liList = document.createElement('li');
        const mydate=new Date(comment.date);
        liList.innerHTML = `${comment.comment} <span>${mydate.getDate() + ' ' + mydate.toLocaleString('en-us', { month: "short" }) + ' ' + mydate.getFullYear()}</span>`;
        ulCommentList.appendChild(liList);
      });
      commentList.appendChild(ulCommentList)

    }
    else{
      console.log("no comment yet")
    }

  }

renderComment(comment){
    const item = document.createElement("li");
    const mydate=new Date(comment.date);

    //mydate.getDate() + ' ' + mydate.toLocaleString('en-us', { month: "short" }) + ' ' + mydate.getFullYear()

    //item.innerHTML = ` <h2>${comment.name}</h2><span>${mydate.getDate()}</span>`;
    
    item.innerHTML = `${comment.comment} <span>${mydate.getDate() + ' ' + mydate.toLocaleString('en-us', { month: "short" }) + ' ' + mydate.getFullYear()}</span>`;
  
    return item;
}


showSingleComment(commentbyName){
  if(commentbyName.length>0){
let commentList = document.querySelector('#commentLists');
let ulCommentList=document.createElement('ul');

commentList.textContent="";
let commenth2 = document.createElement('h2');
    commenth2.textContent="Comments";
    commentList.appendChild(commenth2);

commentbyName.forEach(comment => {
  let liList = document.createElement('li');
  //liList.innerHTML = `${comments.comment}`;
  const mydate=new Date(comment.date);
  liList.innerHTML = `${comment.comment} <span>${mydate.getDate() + ' ' + mydate.toLocaleString('en-us', { month: "short" }) + ' ' + mydate.getFullYear()}</span>`;
  ulCommentList.appendChild(liList);
});
commentList.appendChild(ulCommentList)

}

  
}





}