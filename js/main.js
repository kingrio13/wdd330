

const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week 3 Notes",
      url: "week3/index.html"
    }
  ]



let ai;
for (ai=0; ai<links.length; ai++){
  let li= document.createElement('li');
  let ali=document.createElement('a');
ali.textContent=links[ai].label;
ali.setAttribute('href', links[ai].url);
li.appendChild(ali);

console.log(li)
document.querySelector('#tablecontent').appendChild(li);
}


document.getElementById("currentYear").innerHTML=new Date().getFullYear();
