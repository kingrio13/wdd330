import TodoController from './todoController.js';

const showlist=new TodoController();


window.addEventListener("load", () => {
  //initial load is all List
  showlist.listStatus("all");
  showlist.showAllList();
 
  showlist.addListener();

  //initial class active on all btnk
  const allBtn=document.getElementById("allBtn");
  allBtn.setAttribute("class","todolistActive");

});
