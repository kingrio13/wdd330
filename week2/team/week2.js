function goreq1(){
    req1 = document.getElementById("req1").value;
    document.getElementById("req1_msg").innerText="Thank you! your message is " + req1;
}



//requirement 2

function addSet(){
     numToAdd = parseInt(document.getElementById("getSet").value);

     if(numToAdd<=0){
        document.getElementById("act1").innerText="Please enter a positive value only, starting from 1 to up";
     }
     else{
        document.getElementById("act1").innerText= getset(numToAdd);
     }

    

}

function getset(num){
   let totalAns=0;
    for(a=1; a<=num; a++){
    totalAns=totalAns + a;
}
return totalAns;

}


//requirement 3


function addNum(){
    let numOne= parseInt(document.getElementById("numOne").value);
    let numTwo= parseInt(document.getElementById("numTwo").value);
    document.getElementById("act2").innerText= add(numOne, numTwo);

}

let add = (a,b) => a+b;