function addSet(){
     numToAdd = parseInt(document.getElementById("getSet").value);
    document.getElementById("act1").innerText= getset(numToAdd);

}

function getset(num){
   let totalAns=0;
    for(a=1; a<=num; a++){
    totalAns=totalAns + a;
}
return totalAns;

}



function addNum(){
    let numOne= parseInt(document.getElementById("numOne").value);
    let numTwo= parseInt(document.getElementById("numTwo").value);
    document.getElementById("act2").innerText= add(numOne, numTwo);

}

let add = (a,b) => a+b;