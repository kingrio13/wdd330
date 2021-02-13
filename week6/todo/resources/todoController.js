import TodoModel from './todoModel.js';
import TodoView from './todoView.js';

export default class TodoController {
    
    constructor() {
        this.todoModel=new TodoModel();
        this.todoView=new TodoView();

        const ulActive=document.getElementById('todoActive');
        const listStatus="all";
    }

    
    listStatus(status){
        this.listStatus=status
        return this.listStatus;

    }

    showAllList(){
      
        if(this.listStatus=="all"){
            this.todoView.renderActiveList(this.todoModel.getAllList(),ulActive, this.listStatus);
            this.addDEListner();
            this.footerListener();
            this.todoView.addRemoveStrike();
        }
        else if(this.listStatus=="active"){
            this.todoView.renderActiveList(this.todoModel.getAllList(),ulActive, this.listStatus);
            this.addDEListner();
            this.footerListener();
            this.todoView.addRemoveStrike();
        }
        else if(this.listStatus=="complete"){
            this.todoView.renderActiveList(this.todoModel.getAllList(),ulActive, this.listStatus);
            this.addDEListner();
            this.footerListener();
            this.todoView.addRemoveStrike();
            
        }
       

       
    }

    
    btnActive(){
            // you can use this functions in the future


            const allBtn=document.getElementById("allBtn");
            const activeBtn=document.getElementById("activeBtn");
            const completeBtn=document.getElementById("completeBtn");

            activeBtn.removeAttribute("class");
            allBtn.removeAttribute("class");
            completeBtn.removeAttribute("class");

            if(this.listStatus=="all"){
                allBtn.setAttribute("class","todolistActive");
            }
            else if(this.listStatus=="active"){
                activeBtn.setAttribute("class","todolistActive");
            }
            else if(this.listStatus=="complete"){
                completeBtn.setAttribute("class","todolistActive");
                
            }
    }

    addListener(){
        
        //adding task listener
        const todoBtn=document.querySelector("#todoBtn");

        todoBtn.addEventListener("click", event=>{
            const todoInput=document.querySelector("#todoInput");
        if(todoInput.value !=""){
            this.todoModel.addListStorage(todoInput.value);
            todoInput.value="";
            this.listStatus="active";
            //make btn active 
            this.btnActive();
            this.showAllList(this.listStatus);

            
        }
        else{
            alert("Please Enter Content")
        } 
        });
          
        
    }


    

    addDEListner(){
        const ntodoList=document.querySelectorAll('.todoDelete');

        //delete
        ntodoList.forEach(deleteList=>
            deleteList.addEventListener("click", event=>{
                this.todoModel.getListDelete(event.currentTarget.getAttribute("data-index-number"));
                this.showAllList();
            })
            )
        
        const ntodoCheck=document.querySelectorAll('.checkChange');
        ntodoCheck.forEach(completelist => 
            completelist.addEventListener("change",event=>{
               this.todoModel.getListComplete(event.currentTarget.getAttribute("data-index-number"));
               
               if(completelist.checked){
                completelist.setAttribute("class","listCompleted");
                completelist.nextElementSibling.setAttribute("class","spanCompleted");
                this.showAllList();
               }
               else{
                completelist.removeAttribute("class");
                completelist.nextElementSibling.removeAttribute("class");
                this.showAllList();
               }
               
            })
            )
    }


    footerListener(){
         const allBtn=document.getElementById("allBtn");
         const activeBtn=document.getElementById("activeBtn");
         const completeBtn=document.getElementById("completeBtn");

         
         allBtn.addEventListener("click", allBtns=>{
            
            if(this.listStatus!="all"){//saving memory
            this.listStatus="all";
            this.showAllList(this.listStatus);

            allBtn.setAttribute("class","todolistActive");
            activeBtn.removeAttribute("class");
            completeBtn.removeAttribute("class");
            }
        })


        activeBtn.addEventListener("click", activeBtns=>{
            if(this.listStatus!="active"){//saves memory not to push
            this.listStatus="active";
            this.showAllList(this.listStatus);

            activeBtn.setAttribute("class","todolistActive");
            allBtn.removeAttribute("class");
            completeBtn.removeAttribute("class");
            }
        })


         completeBtn.addEventListener("click", completeBtns=>{
            if(this.listStatus!="complete"){//saves memory
            this.listStatus="complete";
            this.showAllList(this.listStatus);

            completeBtn.setAttribute("class","todolistActive");
            allBtn.removeAttribute("class");
            activeBtn.removeAttribute("class");
            }
        })


    }





    

}
