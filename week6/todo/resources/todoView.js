
export default class TodoView {
    constructor(){

    }

    clearList(ulActive, divActive, activeTitle){
        divActive.innerHTML="";
        ulActive.innerHTML="";
        activeTitle.innerHTML=""
        
    }


    renderActiveList(activelists,ulActive, status){
        

        const divActive=document.getElementById("divActive");
        let activeTitle=document.createElement("h2");
        activeTitle.setAttribute("id","statusTitle");
        this.clearList(ulActive, divActive, activeTitle);//clear all
        let newstatus;
        
        switch(status){
            case "all":
                newstatus="All List";
                activeTitle.innerHTML=newstatus;
                divActive.appendChild(activeTitle);
                for(let x=0; x<activelists.length; x++){
                    let i=localStorage.key(x);
                    ulActive.appendChild(this.renderAlist(activelists[i], i,status));
                }
                 divActive.appendChild(ulActive);   
                 
                break;
            case "active":
                newstatus="Active Todo List";
                
                activeTitle.innerHTML=newstatus;
                divActive.appendChild(activeTitle);
                for(let x=0; x<activelists.length; x++){
                    let i=localStorage.key(x);
                    let nlistshow=JSON.parse(activelists[i]);
                    if(nlistshow.completed==false){
                    ulActive.appendChild(this.renderAlist(activelists[i], i,status));
                    }
                }
                 divActive.appendChild(ulActive);  

                break;
            case "complete":
                newstatus="Completed Todo List";
                activeTitle.innerHTML=newstatus;
                divActive.appendChild(activeTitle);
                for(let x=0; x<activelists.length; x++){
                    let i=localStorage.key(x);
                    let nlistshow=JSON.parse(activelists[i]);
                    if(nlistshow.completed==true){
                    ulActive.appendChild(this.renderAlist(activelists[i], i,status));
                    }
                }
                 divActive.appendChild(ulActive);  
                break;
        }
       

       
      
            
 
       
        
       
    }

    renderAlist(listshow,x, status){
        let nlistshow=JSON.parse(listshow);
        const aList=document.createElement("li");

        aList.innerHTML=`<input type="checkbox" data-index-number="${x}" class="checkChange">
        <span data-index-number="${x}">
        ${nlistshow.content} 
        </span>
       <button data-index-number="${x}" class="todoDelete">X</button>
        `;
        //-<span data-index-number="${x}">Edit</span>
        return aList;
    
       


        
    }




    addRemoveStrike(){

        const ntodoCheck=document.querySelectorAll('.checkChange');
        ntodoCheck.forEach(addListClass => {

            //get the value if completed or not
            let li=addListClass.getAttribute("data-index-number");
            let jcomplete=JSON.parse(localStorage[li]);

            if(jcomplete.completed==true){
                addListClass.setAttribute("class","listCompleted")
                addListClass.checked=true;
                addListClass.nextElementSibling.setAttribute("class","spanCompleted");
                
            }
            else{
                addListClass.removeAttribute("class");
                addListClass.nextElementSibling.removeAttribute("class");
            }


          });
                
            
        

    }

    




    

}
