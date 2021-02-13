const todoTask=document.querySelector('#todoTask');

let divTodo=document.createElement("div");
divTodo.setAttribute("class", "addTodo");
let inputTodo=document.createElement("input");
inputTodo.setAttribute("id","todoInput");
inputTodo.setAttribute("type","text");

let inputBtn=document.createElement("input");
inputBtn.setAttribute("id","todoBtn");
inputBtn.setAttribute("value","Add Task");
inputBtn.setAttribute("type","button");

divTodo.appendChild(inputTodo);
divTodo.appendChild(inputBtn);


let divtodoContainer=document.createElement("div");
divtodoContainer.setAttribute("id", "todoContainer");



let divActive=document.createElement("div");
divActive.setAttribute("id", "divActive");
let ulActive=document.createElement("ul");
ulActive.setAttribute("id","todoActive");
divActive.appendChild(ulActive);





let divFooter=document.createElement("div");
divFooter.setAttribute("id", "divFooter");


let inputAll=document.createElement("span");
inputAll.setAttribute("id","allBtn");
inputAll.innerHTML="ALL"

let inputActive=document.createElement("span");
inputActive.setAttribute("id","activeBtn");
inputActive.innerHTML="Active"

let inputCompleted=document.createElement("span");
inputCompleted.setAttribute("id","completeBtn");
inputCompleted.innerHTML="Completed"



divFooter.appendChild(inputAll);
divFooter.appendChild(inputActive);
divFooter.appendChild(inputCompleted);


todoTask.appendChild(divTodo);
divtodoContainer.appendChild(divActive)
divtodoContainer.appendChild(divFooter)

todoTask.appendChild(divtodoContainer);