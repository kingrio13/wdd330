
export default class TodoView {
    constructor(){

    }

    clearList(ulActive, divActive, activeTitle){
        divActive.innerHTML="";
        ulActive.innerHTML="";
        activeTitle.innerHTML=""
        this.count=0;
    }


    countList(status){
     

        let noteContent=document.createElement("span");
            noteContent.setAttribute("id","noteList")
       if(status=="all"){
             noteContent.innerHTML="There's no Completed nor active list";
        }
        else if(status=="active"){
            noteContent.innerHTML="There's no Active TODO List Here";
        }
        else if(status=="complete"){
            noteContent.innerHTML="There's no completed TODO List Here";
        }
            ulActive.appendChild(noteContent);

        

    }


    renderActiveList(activelists,ulActive, status){
        

        const divActive=document.getElementById("divActive");
        let activeTitle=document.createElement("h2");
        activeTitle.setAttribute("id","statusTitle");
        this.clearList(ulActive, divActive, activeTitle);//clear all
        let countList=document.getElementById("countList");
        let newstatus;
        let countActive=0;
        
        switch(status){
            case "all":
             
                newstatus="All List";
                activeTitle.innerHTML=newstatus;
                divActive.appendChild(activeTitle);
               
                
                for(let x=0; x<activelists.length; x++){
                    let i=localStorage.key(x);
                    let nlistshow=JSON.parse(activelists[i]);

                    ulActive.appendChild(this.renderAlist(activelists[i], i,status));

                    if(nlistshow.completed==false){
                        countActive +=1;
                    }
                 
                }
                countList.innerHTML=`${countActive} Task Left`;

                (activelists.length==0)?this.countList(status):false;
                this.count=0;


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
                    this.count +=1;
                    countActive +=1;
                    }
                }
                countList.innerHTML=`${countActive} Task Left`;
                (this.count==0)?this.countList(status):false;
                this.count=0;
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
                    this.count +=1;
                    }else{
                        countActive +=1;
                    }
                }
                (this.count==0)?this.countList(status):false;
                countList.innerHTML=`${countActive} Task Left`;
                this.count=0;
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
